import { JSXElement, ParentComponent } from "solid-js";
import { Gap,Padding,ScrollBehavior,ScrollPadding,ScrollSnapType,GridAutoFlow,GridAutoColumns,Overflow } from "../types/css_types";
interface ReelGridProps {
  children: JSXElement | JSXElement[];
  gap?: Gap;
  padding?: Padding;
  scrollPadding?: ScrollPadding;
  scrollSnapType?: ScrollSnapType;
  scrollBehavior?: ScrollBehavior;
  GridAutoFlow?: GridAutoFlow;
  GridAutoColumns?: GridAutoColumns;
  OverFlowX?: Overflow;
}

function generateStyle(props: ReelGridProps): { [key: string]: string } {
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
  return (
      <div style={generateStyle(props)} class="reel-grid">
        {props.children}
      </div>
  );

}
