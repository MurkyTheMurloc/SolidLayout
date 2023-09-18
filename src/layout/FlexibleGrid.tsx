import {JSX, JSXElement, ParentComponent, children, createEffect} from "solid-js";
import { Gap,Padding } from "../types/css_types";
import {createUniqueClassName} from "../helper/helper";

interface FlexibleGridProps  extends JSX.DOMAttributes<HTMLDivElement>  {
  children: JSXElement | JSXElement[];
  gap?: Gap;
  padding?: Padding
  class?: string;
}




function generateStyle(props:FlexibleGridProps  ): JSX.CSSProperties  {
  return {
    display: "flex",
    "flex-wrap": "wrap",
    padding: props.padding || "1rem",
    gap: props.gap || "1rem",
  }
  };



export const FlexibleGrid: ParentComponent<FlexibleGridProps> = function(props) {
  const c = children(() => props.children);
  // @ts-ignore
  createEffect(() => c().forEach(item => item.style.flex= "1"));
   const { class: className, ...restProps } = props;
  return (

      <div style={generateStyle(props)} class={props.class||createUniqueClassName("flex-grid")} {...restProps}>
        {c()}
      </div>
  );

}




