import { JSXElement, ParentComponent } from "solid-js";

interface ScrollAreaProps {
  children: JSXElement | JSXElement[];
  hideScrollbar?: boolean;
}

function generateStyle(hideScrollbar: boolean): { [key: string]: string } {
    return {
      position: "relative",
      overflowY: "scroll",
      height: "100vh", 
      justifyItems: "space-evenly",
      scrollbarWidth: hideScrollbar ? "none" : "thin",
      msOverflowStyle: hideScrollbar ? "none" : "auto", 
    };
  }

export const ScrollArea: ParentComponent<ScrollAreaProps> = function(props) {
 const style = generateStyle(props.hideScrollbar || false);
  return (
    <div style={style} class="scrollArea">
      {props.children}
    </div>
  );
}