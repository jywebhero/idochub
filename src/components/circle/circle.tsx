import type { FC } from "react";
import classNames from "classnames";

export type CircleProps = {
  className: string
}

export const Circle: FC<CircleProps> = ({ className }) => {
  return (
    <div className={classNames("w-2 h-2 rounded-full", className)} />
  )
}