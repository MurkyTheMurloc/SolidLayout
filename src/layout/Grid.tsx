import {Accessor, JSXElement, ParentComponent} from "solid-js";
import { Gap, Padding } from "../types/css_types";
import {createUniqueClassName} from "../helper/helper";
import {useAutoBreakPoints} from "../hooks/useResponsiveGrid.ts";
import {BreakPointLayout} from "../types/break_point_layout.ts";
interface GridProps {
  children: JSXElement | JSXElement[];
  gap?: Gap;
  padding?: Padding;
  maxColumnWidth?: number;
  autoFill?: boolean;
  className?: string;
  AutoBreakPoints?: boolean;
  breakPointLayout: BreakPointLayout,
}

function generateStyle(props: GridProps, autoGrid:Accessor<string>): { [key: string]: string } {
  return {
    display: "grid",
    gridTemplateColumns: autoGrid(),
    padding: `${props.padding}`,
    gap: props.gap || "1rem",
  };
}

export const Grid: ParentComponent<GridProps> = function(props) {
  let autoBreakPoints:Accessor<string>= ()=>{return `repeat(${props.autoFill ? 'auto-fill' : 'auto-fit'}, minmax(${props.maxColumnWidth|| "3"}, 1fr));`}
  if(props.AutoBreakPoints??true) {
    autoBreakPoints = useAutoBreakPoints(props.autoFill, props.maxColumnWidth, props.breakPointLayout)
  }
  return (
    <>
      <div style={generateStyle(props,autoBreakPoints)} class={props.className ||  createUniqueClassName("grid")}>
        {props.children}
      </div>
    </>
  );
}