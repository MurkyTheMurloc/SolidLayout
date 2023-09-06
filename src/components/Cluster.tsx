import { ParentComponent } from "solid-js";
import { Gap,Padding } from "../types/css_types";

interface ClusterProps {
  gap?: Gap;
  padding?: Padding;
}

function generateStyle(props:ClusterProps ): { [key: string]: string } {
  return {
         display: "flex",
        "flex-wrap": "wrap",
        padding: props.padding || "1rem",
        gap: props.gap || "1rem",
  };
}

export const Cluster: ParentComponent<ClusterProps> = function(props) {
  return (
      <div style={generateStyle(props)}  class="cluster">
        {props.children}
      </div>
  );

}
