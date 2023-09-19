import {JSXElement, ParentComponent, JSX, createSignal, onMount, Accessor, createEffect} from "solid-js";
import { Gap,Padding,ScrollBehavior,ScrollPadding,ScrollSnapType,GridAutoFlow,GridAutoColumns,Overflow } from "../types/css_types";
import {createUniqueClassName} from "../helper/helper";
import {useresponsiveReel} from "../hooks/useResponsiveGrid";
interface ReelGridProps extends JSX.DOMAttributes<HTMLDivElement>  {
  children: JSXElement | JSXElement[];
  gap?: Gap;
  padding?: Padding;
  scrollPadding?: ScrollPadding;
  scrollSnapType?: ScrollSnapType;
  scrollBehavior?: ScrollBehavior;
  gridAutoFlow?: GridAutoFlow;
  gridAutoColumns?: GridAutoColumns;
  overFlowX?: Overflow;
  class?: string;
  showScrollbar?: boolean;
  autoBreakPoints?: boolean;

}

function generateStyle(props: ReelGridProps,FloatType:Accessor<"column"|"rows">): JSX.CSSProperties {
  return {
    display: "grid",
    "grid-auto-flow":  FloatType(),
    "grid-auto-columns": props.gridAutoColumns || "45%",
    "overflow-x": props.overFlowX || "auto",
    "scroll-snap-type": props.scrollSnapType || "x mandatory",
    "scroll-behavior": props.scrollBehavior || "smooth",
    "scroll-padding": props.scrollPadding || "1rem",
    padding: props.padding || "1rem",
    gap: props.gap || "1rem",
    "overflow-y": props.showScrollbar ? "scroll" : "hidden",
    "-ms-scrollbar-base-color": "transparent",
    "-ms-scrollbar-track-color": "transparent",
    "-ms-scrollbar-darkshadow-color": "transparent",
    "-ms-scrollbar-arrow-color": "transparent",
    "-ms-scrollbar-face-color": "transparent",
    "-ms-scrollbar-highlight-color": "transparent",
  }
}

export const ReelGrid: ParentComponent<ReelGridProps> = function(props) {
  const [flotType , setFlotType] = createSignal<"rows"|"columns">(props.gridAutoFlow);
  onMount(()=>{
    if (props.autoBreakPoints??true){
      createEffect(()=>{
        console.log(useresponsiveReel())
        setFlotType(useresponsiveReel())
      })

    }
  })
  const { class: className, ...restProps } = props;
  return (

      <div style={generateStyle(props,flotType)} class={props.class || createUniqueClassName("reel-grid")} {...restProps}>
        {props.children}
      </div>

  );

}
