import {Component} from "solid-js";

import {Size} from "../types/css_types";
import {height, spacer, width} from "../styles/spacer.css";
import {assignInlineVars} from "@vanilla-extract/dynamic";

type SpaceProps = {
    height?: Size;
    width?: Size;
}

export const Spacer: Component<SpaceProps> = function(props) {

  return (
      <div style={
          // @ts-ignore
          assignInlineVars({
              [width]: props.width,
              [height]: props.height
          })
      } class={spacer}/>
  );
};