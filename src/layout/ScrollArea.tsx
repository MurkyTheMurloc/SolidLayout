import { ParentComponent,JSX } from "solid-js";
import {Height} from "../types/css_types";
import {createUniqueClassName} from "../helper/helper";
interface ScrollAreaProps {
  scrollbarWidth: "none" | "thin";
  msOverflowStyle: "none" | "auto";
  hideScrollbar?: boolean;
  height?: Height;
  className?: string;
}

function generateStyle(props:ScrollAreaProps) : JSX.CSSProperties {
    return {
      position: "relative",
      "overflow-y": "scroll",
      height: props.height || "100vh",
      "justify-items": "space-evenly",
      "scrollbar-width": props.hideScrollbar ? "none" : "thin",
      "-ms-overflow-style": props.hideScrollbar ? "none" : "auto",
    };
  }

export const ScrollArea: ParentComponent<ScrollAreaProps> = function(props) {

  return (
    <div style={generateStyle(props)} class={props.className || createUniqueClassName("scroll-area")}>
      {props.children}
    </div>
  );
}