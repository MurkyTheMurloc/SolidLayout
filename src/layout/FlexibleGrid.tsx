import {JSX, JSXElement, ParentComponent, children, createEffect} from "solid-js";
import { Gap,Padding } from "../types/css_types";
import {createUniqueClassName} from "../helper/helper";
interface FlexibleGridProps {
  children: JSXElement | JSXElement[];
  gap?: Gap;
  padding?: Padding
  className?: string;
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
  return (

      <div style={generateStyle(props)} class={props.className||createUniqueClassName("flex-grid")}>
        {c()}
      </div>
  );

}




