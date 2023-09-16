import { ParentComponent,JSX } from "solid-js";
import { Gap,Padding } from "../types/css_types";
import {createUniqueClassName} from "../helper/helper";

interface ClusterProps extends  JSX.HTMLAttributes<HTMLDivElement> {
  gap?: Gap;
  padding?: Padding;
  class?: string;
}

function generateStyle(props:ClusterProps ): JSX.CSSProperties {
  return {
         display: "flex",
        "flex-wrap": "wrap",
        padding: props.padding || "1rem",
        gap: props.gap || "1rem",
  };
}

export const Cluster: ParentComponent<ClusterProps> = function(props) {
    const { class: className, ...restProps } = props;
  return (
      <div style={generateStyle(props)}  class={props.class||createUniqueClassName("cluster")} {...restProps} >
        {props.children}
      </div>
  );

}
