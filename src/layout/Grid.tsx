import {type ParentComponent} from "solid-js";
import {Gap, Padding} from "../types/css_types";
import {BreakPointLayout} from "../types/break_point_layout";
import {
    autoFill,
    grid,
    gridGap,
    lgColumnWidth,
    mdColumnWidth,
    smColumnWidth,
    xlColumnWidth,
    xxlColumnWidth
} from "../styles/grid.css";
import {assignInlineVars} from "@vanilla-extract/dynamic";


type GridProps = {
  gap?: Gap;
  padding?: Padding;
  maxColumnWidth?: number;
    minColumnWidth?: number;
    autoFill?: "auto-fill" | "auto-fit";
  AutoBreakPoints?: boolean;
  breakPointLayout: BreakPointLayout,
}



export const Grid: ParentComponent<GridProps> = function(props) {

    return (

        <div
            // @ts-ignore
            style={assignInlineVars({
                [gridGap]: props.gap,
                [autoFill]: props.autoFill,
                [smColumnWidth]: `${props.minColumnWidth}px`,
                // @ts-ignore
                [mdColumnWidth]: `${props.minColumnWidth + 50}px`,
                // @ts-ignore
                [lgColumnWidth]: `${props.maxColumnWidth - 75}px`,
                // @ts-ignore
                [xlColumnWidth]: `${props.maxColumnWidth - 50}px`,
                // @ts-ignore
                [xxlColumnWidth]: `${props.maxColumnWidth + 50}px`,
            })}
            class={grid}>
        {props.children}
      </div>

    );
}