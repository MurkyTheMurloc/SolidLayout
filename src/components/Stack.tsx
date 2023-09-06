import { JSXElement, ParentComponent } from "solid-js";
import { Gap, Padding } from "../types/css_types";

interface StackProps {
  children: JSXElement | JSXElement[];
  gap?: Gap;
  padding?: Padding;
  direction?: "row" | "column";
}

function generateStyle(props: StackProps): { [key: string]: string } {
  return {
    display: "flex",
    flexDirection: props.direction || "column",
    gap: props.gap || "1rem",
    padding: props.padding || "1rem",
  };
}

export const Stack: ParentComponent<StackProps> = function(props) {
  return (
    <div style={generateStyle(props)} class="stack">
      {props.children}
    </div>
  );
}