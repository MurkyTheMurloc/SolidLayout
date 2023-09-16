import { JSXElement, ParentComponent,JSX } from "solid-js";
import { Gap, Padding } from "../types/css_types";
import {createUniqueClassName} from "../helper/helper";
interface StackProps {
  children: JSXElement | JSXElement[];
  gap?: Gap;
  padding?: Padding;
  direction?: "row" | "column";
  className?: string;
}

function generateStyle(props: StackProps): JSX.CSSProperties {
  return {
    display: "flex",
    "flex-direction": props.direction || "column",
    gap: props.gap || "1rem",
    padding: props.padding || "1rem",
  };
}

export const Stack: ParentComponent<StackProps> = function(props) {
  return (
    <div style={generateStyle(props)} class={props.className || createUniqueClassName("stack")}>
      {props.children}
    </div>
  );
}