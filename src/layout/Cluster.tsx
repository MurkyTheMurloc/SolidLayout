import {ParentComponent} from "solid-js";
import {Gap, Padding} from "../types/css_types";

import {cluster, gap, padding} from "../styles/cluster.css";
import {assignInlineVars} from "@vanilla-extract/dynamic";

type ClusterProps = {
  gap?: Gap;
  padding?: Padding;
}



export const Cluster: ParentComponent<ClusterProps> = function(props) {
  return (
      // @ts-ignore
      <div style={assignInlineVars({
          [gap]: props.gap,
          [padding]: props.padding,
      })} class={cluster}>
        {props.children}
      </div>
  );

}
