import {ParentComponent} from "solid-js";
import {
    Gap,
    GridAutoColumns,
    GridAutoFlow,
    Overflow,
    Padding,
    ScrollBehavior,
    ScrollPadding,
    ScrollSnapType,
} from "../types/css_types";

import {
    direction,
    gap,
    gridAutoColumns,
    overflowX,
    overflowY,
    padding,
    reelGrid,
    scrollBehavior,
    scrollPadding,
    scrollType
} from "../styles/reel_grid.css";
import {assignInlineVars} from "@vanilla-extract/dynamic";


type ReelGridProps = {
  gap?: Gap;
  padding?: Padding;
  scrollPadding?: ScrollPadding;
  scrollSnapType?: ScrollSnapType;
  scrollBehavior?: ScrollBehavior;
    scrollAlignment?: ScrollBehavior;
    scrollType?: ScrollSnapType;
    direction?: GridAutoFlow;
  gridAutoColumns?: GridAutoColumns;
  overFlowX?: Overflow;
    overFlowY?: Overflow;
    breakPointDirection?: GridAutoFlow;
    breakPointGridAutoColumns?: GridAutoColumns;
}



export const ReelGrid: ParentComponent<ReelGridProps> = function(props) {


    return (
        // @ts-ignore
        <div style={assignInlineVars({
            [gap]: props.gap,
            [padding]: props.padding,
            [scrollPadding]: props.scrollPadding,
            [scrollBehavior]: props.scrollBehavior,
            [scrollType]: props.scrollSnapType,
            [direction]: props.direction,
            [gridAutoColumns]: props.gridAutoColumns,
            [overflowX]: props.overFlowX,
            [overflowY]: props.overFlowY,

        })}
             class={reelGrid}>
        {props.children}
      </div>

  );

}
