import { JSXElement, ParentComponent } from "solid-js";
import { Gap, Padding, Size } from "../types/css_types";
import { createUniqueClassName } from "../helper/helper";

interface ContainerProps {
  children: JSXElement | JSXElement[];
  gap?: Gap;
  padding?: Padding;
  className?: string;
  height?: Size;
  width?: Size;
}

export const SmallContainer: ParentComponent<ContainerProps> = function (
  props
) {
  return (
    <div
      style={{
        padding: props.padding || "0.5rem",
        gap: props.gap || "0.5rem",
        height: props.height || "100px",
        width: props.width || "100px",
      }}
      class={props.className || createUniqueClassName("small-container")}
    >
      {props.children}
    </div>
  );
};

export const MediumContainer: ParentComponent<ContainerProps> = function (
  props
) {
  return (
    <div
      style={{
        padding: props.padding || "1rem",
        gap: props.gap || "1rem",
        height: props.height || "200px",
        width: props.width || "200px",
      }}
      class={props.className || createUniqueClassName("medium-container")}
    >
      {props.children}
    </div>
  );
};

export const LargeContainer: ParentComponent<ContainerProps> = function (props) {
  return (
    <div
      style={{
        padding: props.padding || "2rem",
        gap: props.gap || "2rem",
        height: props.height || "300px",
        width: props.width || "300px",
      }}
      class={props.className || createUniqueClassName("big-container")}
    >
      {props.children}
    </div>
  );
};

export const AutoContainer: ParentComponent<ContainerProps> = function (
    props
  ) {
    return (
      <div
        style={{
          padding: props.padding || "1rem",
          gap: props.gap || "1rem",
          height: "auto",
          width: "auto",
        }}
        class={props.className || createUniqueClassName("auto-container")}
      >
        {props.children}
      </div>
    );
  };
