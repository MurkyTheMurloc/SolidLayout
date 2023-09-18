import { ParentComponent,JSX } from "solid-js";
import {Height} from "../types/css_types.ts";
import {createUniqueClassName} from "../helper/helper.ts";
interface ScrollAreaProps extends JSX.DOMAttributes<HTMLDivElement>  {
  scrollbarWidth?: "none" | "thin";
  msOverflowStyle?: "none" | "auto";
  hideScrollbar?: boolean;
  height?: Height;
  class?: string;
}

function generateStyle(props:ScrollAreaProps) : JSX.CSSProperties {
    return {
      position: "relative",
      "overflow-y": "auto",
      height: props.height || "100vh",
      "justify-items": "space-evenly",
      "scrollbar-width": props.hideScrollbar ? "none" : "thin",
      "-ms-overflow-style": props.hideScrollbar ? "none" : "auto",
    };
  }

export const ScrollArea: ParentComponent<ScrollAreaProps> = function(props) {
  const { class: className, ...restProps } = props;
  return (
    <div style={generateStyle(props)} class={props.class || createUniqueClassName("scroll-area")} {...restProps}>
      {props.children}
    </div>
  );
}