import { JSXElement, ParentComponent } from "solid-js";
import { Gap,Padding } from "../types/css_types";
import {createUniqueClassName} from "../helper/helper";
interface FlexibleGridProps {
  children: JSXElement | JSXElement[];
  gap?: Gap;
  padding?: Padding
  className?: string;
}

function generateStyle(props:FlexibleGridProps  ): { [key: string]:string} {
  return {
    display: "flex",
    "flex-wrap": "wrap",
    padding: props.padding || "1rem",
    gap: props.gap || "1rem",
  }
  };

export const FlexibleGrid: ParentComponent<FlexibleGridProps> = function(props) {
  return (
    
      <div style={generateStyle(props)} class={props.className||createUniqueClassName("flex-grid")}>
        {props.children}
      </div>
  );

}
