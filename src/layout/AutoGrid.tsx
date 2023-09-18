import { ParentComponent,JSX } from "solid-js";
import { Gap,Padding,Columns } from "../types/css_types";
import {createUniqueClassName} from "../helper/helper";

interface AutoGridProps  extends JSX.DOMAttributes<HTMLDivElement>  {

  gap?: Gap;
  padding?: Padding;
  columns?: Columns;
  class?: string;

}



function generateStyle(props: AutoGridProps): JSX.CSSProperties {
  return {
    padding: props.padding || "1rem",
    display: "grid",
    "grid-template-columns": `repeat(auto-fit, minmax(${props.columns||"10rem"}, 1fr))`,
    "grid-gap": props.gap || "1rem",
  };
}

export const AutoGrid: ParentComponent<AutoGridProps> = function(props) {
   const { class: className, ...restProps } = props;
  return (
      <div  style={generateStyle(props)} class={props.class|| createUniqueClassName("auto-grid") } {...restProps} >
        {props.children}
      </div>
  );

}


