import {type ReactNode} from "react";

export type ButtonProps = {
  density?: "medium";
  style?: "brand" | "danger";
  type: "button";
  emphasis: "primary";
  progress?: boolean;
  children?: ReactNode
}
