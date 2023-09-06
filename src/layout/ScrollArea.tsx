import { JSXElement, ParentComponent } from "solid-js";
import {Height} from "../types/css_types";

interface ScrollAreaProps {

  hideScrollbar?: boolean;
  height?: Height;
}

function generateStyle(props:ScrollAreaProps): { [key: string]: string } {
    return {
      position: "relative",
      overflowY: "scroll",
      height: props.height || "100vh", 
      justifyItems: "space-evenly",
      scrollbarWidth: props.hideScrollbar ? "none" : "thin",
      msOverflowStyle: props.hideScrollbar ? "none" : "auto", 
    };
  }

export const ScrollArea: ParentComponent<ScrollAreaProps> = function(props) {
 const style = generateStyle(props);
  return (
    <div style={style} class="scroll-area">
      {props.children}
    </div>
  );
}