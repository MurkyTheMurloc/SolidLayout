import {Accessor, JSXElement, onMount, ParentComponent,JSX} from "solid-js";
import { Gap, Padding } from "../types/css_types";
import {createUniqueClassName} from "../helper/helper";
import {useAutoBreakPoints} from "../hooks/useResponsiveGrid";
import {BreakPointLayout} from "../types/break_point_layout";

interface GridProps extends JSX.DOMAttributes<HTMLDivElement> {
  children: JSXElement | JSXElement[];
  gap?: Gap;
  padding?: Padding;
  maxColumnWidth?: number;
  autoFill?: boolean;
  class?: string;
  AutoBreakPoints?: boolean;
  breakPointLayout: BreakPointLayout,
}

function generateStyle(props: GridProps, autoGrid:Accessor<string>):  JSX.CSSProperties {
  return {
    display: "grid",
    "grid-template-columns": autoGrid(),
    padding: `${props.padding}`,
    gap: props.gap || "1rem",
  };
}

export const Grid: ParentComponent<GridProps> = function(props) {
  const{class:className, ...restProps} = props;
  let autoBreakPoints:Accessor<string>= ()=>{return `repeat(${props.autoFill ? 'auto-fill' : 'auto-fit'}, minmax(${props.maxColumnWidth|| "3"}, 1fr));`}
  if(props.AutoBreakPoints??true) {
    onMount(()=>{autoBreakPoints = useAutoBreakPoints(props.autoFill, props.maxColumnWidth, props.breakPointLayout)
    })
  }
  return (
    <>
      <div style={generateStyle(props,autoBreakPoints)} class={props.class ||  createUniqueClassName("grid")} {...restProps}>
        {props.children}
      </div>
    </>
  );
}