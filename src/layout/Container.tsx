import {JSX, JSXElement, ParentComponent} from "solid-js";
import {Gap, Padding, Size} from "../types/css_types";
import {smallContainer} from "../styles/container/small_container.css";
import {mediumContainer} from "../styles/container/medium_container.css";
import {largeContainer} from "../styles/container/large_container.css";
import {extraExtraLargeContainer} from "../styles/container/extra_extra_large_container.css";
import {autoContainer} from "../styles/container/auto_container.css";
import {contentContainer} from "../styles/container/content_container.css";

interface ContainerProps extends JSX.DOMAttributes<HTMLDivElement>   {
  children: JSXElement | JSXElement[];
  gap?: Gap;
  padding?: Padding;
  height?: Size;
  width?: Size;
}

export const SmallContainer: ParentComponent<ContainerProps> = function (
  props
) {
  return (
    <div
        class={smallContainer}
        {...props}
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
        class={mediumContainer}
        {...props}
    >
      {props.children}
    </div>
  );
};

export const LargeContainer: ParentComponent<ContainerProps> = function (props) {
  return (
    <div
        class={largeContainer}
        {...props}
    >
      {props.children}
    </div>
  );
};

export const ExtraLargeContainer: ParentComponent<ContainerProps> = function (
    props
) {

    return (
        <div
            class={extraExtraLargeContainer}
            {...props}
        >
            {props.children}
        </div>
    );
}

export const XXLContainer: ParentComponent<ContainerProps> = function (props) {
    return (
        <div
            class={extraExtraLargeContainer}
            {...props}
        >
            {props.children}
        </div>
    );
}

export const AutoContainer: ParentComponent<ContainerProps> = function (props

  ) {
    return (
        <div
            class={autoContainer}
            {...props}
        >
            {props.children}
        </div>
    );
};

export const ContentContainer: ParentComponent<ContainerProps> = function (props) {
    return (
        <div
            class={contentContainer}
            {...props}
        >
        {props.children}
        </div>
    );
}

