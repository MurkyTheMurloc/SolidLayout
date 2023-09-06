import { JSXElement, ParentComponent } from "solid-js";
import { Gap,Padding } from "../types/css_types";
interface FlexibleGridProps {
  children: JSXElement | JSXElement[];
  gap?: Gap;
  padding?: Padding;
}

function generateStyle(props:FlexibleGridProps  ): { [key: string]:string} {
  return {
    display: "flex",
    "flex-wrap": "wrap",
    padding: props.padding || "1rem",
    gap: props.gap || "1rem",
  }
  };

export const FlexibleGrid: ParentComponent<FlexibleGridProps> = function(props) {
  return (
    
      <div style={generateStyle(props)} class="flexible-grid">
        {props.children}
      </div>
  );

}
