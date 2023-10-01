import {JSXElement, ParentComponent} from "solid-js";
import {FlexDirection, Gap, Padding} from "../types/css_types";
import {direction, gap, padding, stack} from "../styles/stack.css";
import {assignInlineVars} from "@vanilla-extract/dynamic";

type StackProps = {
  children: JSXElement | JSXElement[];
  gap?: Gap;
  padding?: Padding;
    direction?: FlexDirection;
}


export const Stack: ParentComponent<StackProps> = function(props) {
  return (
      // @ts-ignore
      <div style={assignInlineVars(
          // @ts-ignore
          {
              [gap]: props.gap,
              [padding]: props.padding,
              [direction]: props.direction
          })} class={stack}>
      {props.children}
    </div>
  );
}