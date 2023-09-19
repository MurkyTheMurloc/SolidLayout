
import { JSXElement, ParentComponent,JSX } from "solid-js";
import { MarginInline,Gap,FlexBasis } from "../types/css_types.ts";
import {createUniqueClassName} from "../helper/helper.ts";

interface DualPannelProps extends JSX.DOMAttributes<HTMLDivElement> {
  children: [JSXElement, JSXElement];
  gap?: Gap;
  marginInline?: MarginInline;
  mainPannelSize?: FlexBasis;
  sidePannelSize?: FlexBasis;
  class?: string;

}

function generateStyle(props:DualPannelProps ): JSX.CSSProperties {
  return {
    display: "flex",
    "flex-wrap": "wrap",
    "align-items": "start",
    gap: props.gap || "1rem",
    "margin-inline": props.marginInline ||"auto",
  }
  };

export const DualPanel: ParentComponent<DualPannelProps> = function(props) {
  const { class: className, ...restProps } = props;
  return (

      <div style={generateStyle(props)} class={props.class|| createUniqueClassName("dual-panel")} {...restProps}>
        <div style={{
          "flex-basis": props.mainPannelSize||"500px",
          "flex-grow": "9999",
        }}  class="first_child">
          {props.children[0]}
          </div>
        <div style={{
          "flex-basis": props.sidePannelSize||"300px",
          "flex-grow": "1",
        }} class="second_child">
          {props.children[1]}
          </div>
      </div>

  );

}
