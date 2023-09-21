import {Accessor, createEffect, createSignal, JSX, JSXElement, ParentComponent} from "solid-js";
import {
    Gap,
    GridAutoColumns,
    GridAutoFlow,
    Overflow,
    Padding,
    ScrollBehavior,
    ScrollPadding,
    ScrollSnapType,
    Size
} from "../types/css_types";
import {createUniqueClassName} from "../helper/helper";
import {useresponsiveReel} from "../hooks/useResponsiveGrid";
import {useAppShellHeight, useAppShellWidth, useBreakPoint} from "../components/stores/break_point_store";

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

function generateStyle(props: ReelGridProps, FloatType: Accessor<"column" | "row">, columnWidth: Accessor<Size>): JSX.CSSProperties {
  return {
    display: "grid",
    "grid-auto-flow":  FloatType(),
      "grid-auto-columns": columnWidth(),
    "overflow-x": props.overFlowX || "auto",
    "scroll-snap-type": props.scrollSnapType || "x mandatory",
    "scroll-behavior": props.scrollBehavior || "smooth",
    "scroll-padding": props.scrollPadding || "1rem",
    padding: props.padding || "1rem",
    gap: props.gap || "1rem",
    "overflow-y": props.showScrollbar ? "scroll" : "hidden",
}
}

export const ReelGrid: ParentComponent<ReelGridProps> = function(props) {
    const breakPoint = useBreakPoint();
    const windowWidth = useAppShellWidth();
    const windowHeight = useAppShellHeight();
    const [flotType, setFlotType] = createSignal<GridAutoFlow>(props.gridAutoFlow || "row");
    const [columnWidth, setColumnWidth] = createSignal<Size>("100%" || props.gridAutoColumns)
    createEffect(() => {
        if (props.autoBreakPoints ?? true) {
            useresponsiveReel(setFlotType, setColumnWidth, windowWidth(), windowHeight(), breakPoint())
        }
    })


    const {class: className, ...restProps} = props;
  return (

      <div style={generateStyle(props, flotType, columnWidth)}
           class={props.class || createUniqueClassName("reel-grid")} {...restProps}>
        {props.children}
      </div>

  );

}
