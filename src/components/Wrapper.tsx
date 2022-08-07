import { PropsWithChildren } from 'react';

export function Wrapper({ children }: PropsWithChildren) {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">{children}</div>
  );
}
