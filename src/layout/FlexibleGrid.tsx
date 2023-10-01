import {children, createEffect, JSXElement, ParentComponent} from "solid-js";
import {flexible_grid, gap, padding} from "../styles/flexible_grid.css";
import {assignInlineVars} from "@vanilla-extract/dynamic";
import {Gap, Padding} from "../types/css_types";

type FlexibleGridProps = {
  children: JSXElement | JSXElement[];
  gap?: Gap;
  padding?: Padding
}







export const FlexibleGrid: ParentComponent<FlexibleGridProps> = function(props) {
  const c = children(() => props.children);
  // @ts-ignore
  createEffect(() => c().forEach(item => item.style.flex= "1"));
  return (
      // @ts-ignore
      <div style={assignInlineVars({
          [gap]: props.gap,
          [padding]: props.padding,
      })} class={flexible_grid}>
        {c()}
      </div>
  );

}




