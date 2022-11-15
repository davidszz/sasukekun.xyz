import humanizeDuration from "humanize-duration";
import useSound from 'use-sound';
import { useEffect, useMemo, useState } from "react";

import { DateIComeBack, Texts } from "./utils/constants";
import { Text } from "./components/Text";

export default function App() {
  const [date, setDate] = useState<Date>(new Date());
  const [currentText, setCurrentText] = useState(0);
  const [play] = useSound('/sounds/tap.ogg');

  useEffect(() => {
    let interval: number;
    const timeout = setTimeout(() => {
      setDate(new Date());
      interval = setInterval(() => {
        setDate(new Date());
      }, 1000);
    }, 1000 - date.getMilliseconds());

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    }
  }, []);

  const backIn = useMemo(() => {
    const remaining = DateIComeBack.getTime() - date.getTime();
    if (remaining < 60_000) {
      return `666 hours`;
    }
    
    return humanizeDuration(DateIComeBack.getTime() - date.getTime(), {
      language: 'en',
      round: true,
      largest: 1,
    });
  }, [date]);

  function handleChangeText() {
    play();
    setCurrentText((state) => state + 1 > (Texts.length - 1) ? 0 : state + 1);
  }

  return <div onClick={handleChangeText} className="w-screen h-screen flex flex-col sm:flex-row  justify-center items-center cursor-crosshair">
    <span className="border-gray-300 text-gray-300 select-none sm:border-r sm:pr-4">I will be back in <strong style={{
      textDecoration: (DateIComeBack.getTime() - date.getTime()) < 60_000 ? 'line-through' : 'none',
    }}>{backIn}</strong></span>
    <Text>
      {Texts[currentText]}
    </Text>
  </div>;
}
