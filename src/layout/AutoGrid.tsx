import { ParentComponent } from "solid-js";
import { Gap,Padding,Columns } from "../types/css_types";
import {createUniqueClassName} from "../helper/helper";

interface AutoGridProps {
  children: JSX.Element | JSX.Element[];
  gap?: Gap;
  padding?: Padding;
  columns?: Columns;
  className?: string;
  
}



function generateStyle(props: AutoGridProps): { [key: string]: string } {
  return {
    padding: props.padding || "1rem",
    display: "grid",
    "grid-template-columns": `repeat(auto-fit, minmax(${props.columns||"10rem"}, 1fr))`,
    "grid-gap": props.gap || "1rem",
  };
}

export const AutoGrid: ParentComponent<AutoGridProps> = function(props) {
  return (
      <div  style={generateStyle(props)} class={props.className|| createUniqueClassName("auto-grid") } >
        {props.children}
      </div>
  );

}


