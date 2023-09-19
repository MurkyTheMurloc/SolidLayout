import {Component,JSX } from "solid-js";
import {createUniqueClassName} from "../helper/helper";
import {Size} from "../types/css_types";

interface SpaceProps extends JSX.DOMAttributes<HTMLDivElement> {
  height?: Size;
    width?: Size;
}

export const Spacer: Component<SpaceProps> = function(props) {


  return (
    <div style={{
      width: props.width || "1rem",
      height: props.height || "1rem",}
    } class={createUniqueClassName("space")} {...props} />
  );
};