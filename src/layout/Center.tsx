import { JSXElement, ParentComponent,JSX } from "solid-js";
import {createUniqueClassName} from "../helper/helper";

interface CenterProps extends JSX.DOMAttributes<HTMLDivElement> {
  children: JSXElement | JSXElement[];
  class?: string;
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
  const { class: className, ...restProps } = props;
  return (
    <div style={generateStyle()} class={props.class||createUniqueClassName("center")} {...restProps}>
      {props.children}
    </div>
  );
}

export const Left: ParentComponent<CenterProps> = function (props) {
  const { class: className, ...restProps } = props;
  return (
    <div
      style={{ ...generateStyle(), "justify-content": "flex-start" }}
      class={props.class || createUniqueClassName("left")}
      {...restProps}
    >
      {props.children}
    </div>
  );
};

export const Right: ParentComponent<CenterProps> = function (props) {
  const { class: className, ...restProps } = props;
  return (
    <div
      style={{ ...generateStyle(), "justify-content": "flex-end" }}
      class={props.class || createUniqueClassName("right")}
      {...restProps}
    >
      {props.children}
    </div>
  );
};

export const Apart: ParentComponent<CenterProps> = function (props) {
  const { class: className, ...restProps } = props;
  return (
    <div
  
      style={{ ...generateStyle(), "justify-content": "space-between" }}
      class={props.class|| createUniqueClassName("apart")}
      {...restProps}
    >
      {props.children}
    </div>
  );
};