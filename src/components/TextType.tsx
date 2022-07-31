import { useEffect, useMemo, useState } from 'react';
import useSound from 'use-sound';

interface Props {
  text: string;
  skipped?: boolean;
  onSkip?: () => void;
}

export function TextType({ text, onSkip, skipped }: Props) {
  const [play] = useSound('/sounds/typing.ogg');

  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const words = useMemo(() => text.split(/\s+/g), [text]);
  const toShow = useMemo(
    () =>
      [...words.slice(0, index), words[index] && words[index].slice(0, charIndex + 1)].filter(
        Boolean
      ),
    [words, index, charIndex]
  );

  useEffect(() => {
    const char = words[index]?.[charIndex];

    if (char) {
      setTimeout(
        () => {
          setCharIndex(charIndex + 1);
        },
        char === '.' ? 750 : 100
      );
    } else if (words[index]) {
      setIndex(index + 1);
      setCharIndex(0);
    }
  }, [index, charIndex]);

  useEffect(() => {
    if (!skipped && words[index]?.[charIndex]) {
      play();
    }
  }, [index, play, words, charIndex]);

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div
      className="fixed w-full flex flex-wrap gap-2 h-screen items-center justify-center bg-gray-900 z-50"
      onClick={onSkip}
    >
      {toShow.map((word, idx) => (
        // eslint-disable-next-line react/no-array-index-key
        <span key={idx} className="text-gray-200 text-4xl font-semibold italic">
          {word}
        </span>
      ))}
    </div>
  );
}
