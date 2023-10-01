import {ParentComponent} from "solid-js";
import {Columns, Gap, Padding} from "../types/css_types";
import {autoGrid, columns, gap, padding} from "../styles/auto_grid.css";
import {assignInlineVars} from "@vanilla-extract/dynamic";

type AutoGridProps = {

  gap?: Gap;
  padding?: Padding;
  columns?: Columns;

}

export const AutoGrid: ParentComponent<AutoGridProps> = function(props) {

  return (
      // @ts-ignore
      <div class={autoGrid} style={assignInlineVars({
          [gap]: props.gap,
          [padding]: props.padding,
          [columns]: props.columns
      })}>
        {props.children}
      </div>
  );

}


