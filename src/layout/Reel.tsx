import { JSXElement, ParentComponent, JSX } from "solid-js";
import { Gap,Padding,ScrollBehavior,ScrollPadding,ScrollSnapType,GridAutoFlow,GridAutoColumns,Overflow } from "../types/css_types";
import {createUniqueClassName} from "../helper/helper";
interface ReelGridProps extends JSX.DOMAttributes<HTMLDivElement>  {
  children: JSXElement | JSXElement[];
  gap?: Gap;
  padding?: Padding;
  scrollPadding?: ScrollPadding;
  scrollSnapType?: ScrollSnapType;
  scrollBehavior?: ScrollBehavior;
  GridAutoFlow?: GridAutoFlow;
  GridAutoColumns?: GridAutoColumns;
  OverFlowX?: Overflow;
  class?: string;

}

function generateStyle(props: ReelGridProps):  JSX.CSSProperties {
  return {
    display: "grid",
    "grid-auto-flow": props.GridAutoFlow||"column",
    "grid-auto-columns": props.GridAutoColumns||"45%",
    "overflow-x": props.OverFlowX||"scroll",
    "scroll-snap-type": props.scrollSnapType || "x mandatory",
    "scroll-behavior": props.scrollBehavior || "smooth",
    "scroll-padding": props.scrollPadding || "1rem",
    padding: props.padding || "1rem",
    gap: props.gap || "1rem",

  };
}

export const ReelGrid: ParentComponent<ReelGridProps> = function(props) {
  const { class: className, ...restProps } = props;
  return (
      <div style={generateStyle(props)} class={props.class || createUniqueClassName("reel-grid")} {...restProps}>
        {props.children}
      </div>
  );

}
