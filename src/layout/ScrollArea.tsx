import {ParentComponent} from "solid-js";
import {Height} from "../types/css_types";
import {height, scrollArea, scrollBar} from "../styles/scroll_area.css";
import {assignInlineVars} from "@vanilla-extract/dynamic";


type ScrollAreaProps = {
    scrollbarWidth?: "none" | "auto",
    msOverflowStyle?: "none" | "auto",
    scrollbar: "none" | "auto" | "thin",
  height?: Height;
}


export const ScrollArea: ParentComponent<ScrollAreaProps> = function(props) {


    return (
        // @ts-ignore
        <div class{...scrollArea}
            // @ts-ignore
             style={assignInlineVars({
                 [scrollBar]: props.scrollbar,
                 [height]: props.height,
             })}>
      {props.children}
    </div>
  );
}