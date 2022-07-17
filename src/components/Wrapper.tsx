import { PropsWithChildren, useEffect, useRef, useState } from 'react';
import useSound from 'use-sound';

import bgVideo from '../assets/bg.mp4';

export function Wrapper({ children }: PropsWithChildren) {
  const [play, soundData] = useSound(bgVideo);
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (soundData.sound && !playing) {
      setPlaying(true);
      play();
      videoRef.current?.play();
    }
  }, [soundData.sound, playing, videoRef.current]);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      {children}
      <video
        ref={videoRef}
        id="bg-video"
        className="fixed w-full h-screen aspect object-cover"
        muted
        onPlay={() => {
          play();
        }}
        onEnded={() => {
          soundData?.stop();
          setPlaying(false);
        }}
      >
        <source src={bgVideo} />
      </video>
    </div>
  );
}
