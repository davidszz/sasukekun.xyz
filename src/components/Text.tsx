import { HTMLAttributes, PropsWithChildren } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {}

export function Text(props: Props & PropsWithChildren) {
  return <div {...props} className="py-2 px-4 text-gray-300 font-sans select-none"></div>
}