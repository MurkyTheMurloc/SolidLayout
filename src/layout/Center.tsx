import { JSXElement, ParentComponent,JSX } from "solid-js";
import {createUniqueClassName} from "../helper/helper";
interface CenterProps {
  children: JSXElement | JSXElement[];
  className?: string;
}

function generateStyle(): JSX.CSSProperties {
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

export const Left: ParentComponent<CenterProps> = function (props) {
  return (
    <div
      style={{ ...generateStyle(), "justify-content": "flex-start" }}
      class={props.className || createUniqueClassName("left")}
    >
      {props.children}
    </div>
  );
};

export const Right: ParentComponent<CenterProps> = function (props) {
  return (
    <div
      style={{ ...generateStyle(), "justify-content": "flex-end" }}
      class={props.className || createUniqueClassName("right")}
    >
      {props.children}
    </div>
  );
};

export const Apart: ParentComponent<CenterProps> = function (props) {
  return (
    <div
      style={{ ...generateStyle(), "justify-content": "space-between" }}
      class={props.className || createUniqueClassName("apart")}
    >
      {props.children}
    </div>
  );
};