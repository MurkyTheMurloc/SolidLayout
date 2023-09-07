import { ParentComponent } from "solid-js";
import { Gap,Padding } from "../types/css_types";
import {createUniqueClassName} from "../helper/helper";
interface ClusterProps {
  gap?: Gap;
  padding?: Padding;
  className?: string;
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
      <div style={generateStyle(props)}  class={props.className||createUniqueClassName("cluster")}>
        {props.children}
      </div>
  );

}
