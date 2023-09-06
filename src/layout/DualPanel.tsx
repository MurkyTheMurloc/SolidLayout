
import { JSXElement, ParentComponent } from "solid-js";
import { MarginInline,Gap,FlexBasis } from "../types/css_types";

interface DualPannelProps{
  children: [JSXElement, JSXElement];
  gap?: Gap;
  marginInline?: MarginInline;
  mainPannelSize?: FlexBasis;
  sidePannelSize?: FlexBasis;

}

function generateStyle(props:DualPannelProps ): { [key: string]:string} {
  return {
    display: "flex",
    "flex-wrap": "wrap",
    "align-items": "start",
    gap: props.gap || "1rem",
    "margin-inline": props.marginInline ||"auto",
  }
  };

export const DualPanel: ParentComponent<DualPannelProps> = function(props) {
  return (

      <div style={generateStyle(props)} class="dual-panel">
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
