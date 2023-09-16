import { JSXElement, ParentComponent, JSX} from "solid-js";
import { Gap, Padding, Size } from "../types/css_types";
import { createUniqueClassName } from "../helper/helper";

interface ContainerProps extends JSX.HTMLAttributes<HTMLDivElement>   {
  children: JSXElement | JSXElement[];
  gap?: Gap;
  padding?: Padding;
  class?: string;
  height?: Size;
  width?: Size;
}

export const SmallContainer: ParentComponent<ContainerProps> = function (
  props
) {
  const { class: className, ...restProps } = props;
  return (
    <div
      style={{
        padding: props.padding || "0.5rem",
        gap: props.gap || "0.5rem",
        height: props.height || "100px",
        width: props.width || "100px",
      }}
      class={props.class || createUniqueClassName("small-container")}
   >
      {props.children}
    </div>
  );
};

export const MediumContainer: ParentComponent<ContainerProps> = function (
  props
) {
  const { class: className, ...restProps } = props;
  return (
    <div
      style={{
        padding: props.padding || "1rem",
        gap: props.gap || "1rem",
        height: props.height || "200px",
        width: props.width || "200px",
      }}
      class={props.class || createUniqueClassName("medium-container")}
    { ...restProps}
    >
      {props.children}
    </div>
  );
};

export const LargeContainer: ParentComponent<ContainerProps> = function (props) {
  const { class: className, ...restProps } = props;
  return (
    <div
      style={{
        padding: props.padding || "2rem",
        gap: props.gap || "2rem",
        height: props.height || "300px",
        width: props.width || "300px",
      }}
      class={props.class || createUniqueClassName("big-container")}
    { ...restProps}
    >
      {props.children}
    </div>
  );
};

export const AutoContainer: ParentComponent<ContainerProps> = function (props
  
  ) {
    const { class: className, ...restProps } = props;
    return (
      <div
        style={{
          padding: props.padding || "1rem",
          gap: props.gap || "1rem",
          height: "auto",
          width: "auto",
        }}
        class={props.class || createUniqueClassName("auto-container")}
     { ...restProps}
     >
        {props.children}
      </div>
    );
  };
