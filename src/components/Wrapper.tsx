import { PropsWithChildren, useEffect, useRef, useState } from 'react';
import useSound from 'use-sound';

import bgAudio from '../assets/bg-audio.mp3';
import bgVideo from '../assets/bg-video.mp4';

export function Wrapper({ children }: PropsWithChildren) {
  const [play, soundData] = useSound(bgAudio, { volume: 0.2 });
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    function onClick() {
      if (soundData.sound && !playing) {
        setPlaying(true);
        videoRef.current?.play();
        play();
        document.removeEventListener('click', onClick);
      }
    }

    document.addEventListener('click', onClick);
    return () => {
      document.removeEventListener('click', onClick);
    };
  }, [soundData.sound, playing, videoRef.current]);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      {children}
      <video
        ref={videoRef}
        id="bg-video"
        className="fixed w-full h-screen aspect object-cover"
        muted
        onEnded={() => {
          videoRef.current?.play();
          play();
          setPlaying(true);
        }}
      >
        <source src={bgVideo} />
      </video>
    </div>
  );
}
