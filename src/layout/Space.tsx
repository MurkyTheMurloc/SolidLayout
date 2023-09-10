import { JSXElement, ParentComponent } from "solid-js";
import {createUniqueClassName} from "../helper/helper";
import { Size } from "../types/css_types";
interface SpaceProps {
  height?: Size;
    width?: Size;
}

export const Space: ParentComponent<SpaceProps> = function(props) {
  const style = {
    width: props.width || "1rem",
    height: props.height || "1rem",
  };

  return (
    <div style={style} class={createUniqueClassName("space")} />
  );
};