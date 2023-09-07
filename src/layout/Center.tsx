import { JSXElement, ParentComponent } from "solid-js";
import {createUniqueClassName} from "../helper/helper";
interface CenterProps {
  children: JSXElement | JSXElement[];
  className?: string;
}

function generateStyle(): { [key: string]: string } {
  return {
    display: "flex",
    "justify-content": "center",
    "align-items": "center",
    "text-align": "center",
  };
}

export const Center: ParentComponent<CenterProps> = function(props) {
  return (
    <div style={generateStyle()} class={props.className||createUniqueClassName("center")}>
      {props.children}
    </div>
  );
}