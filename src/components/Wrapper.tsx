import { PropsWithChildren, useRef, useState } from 'react';

import { TextType } from './TextType';

export function Wrapper({ children }: PropsWithChildren) {
  const [started, setStarted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <>
      {!started && (
        <TextType
          text="Tap to continue"
          onSkip={() => {
            setStarted(true);
            if (videoRef.current) {
              videoRef.current.volume = 0.4;
              videoRef.current.play();
            }
          }}
          skipped={started}
        />
      )}
      <div className="w-full h-screen flex flex-col items-center justify-center">
        {children}
        <video
          ref={videoRef}
          id="bg-video"
          className="fixed w-full h-screen aspect object-cover"
          loop
        >
          <source src="/background.mp4" />
        </video>
      </div>
    </>
  );
}
