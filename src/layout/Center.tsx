import {ParentComponent} from "solid-js";

import {apart, center, left, right} from "../styles/center.css";


export const Center: ParentComponent = function (props) {
  return (
      <div class={center}>
      {props.children}
    </div>
  );
}

export const Left: ParentComponent = function (props) {

  return (
    <div
        class={left}
    >
      {props.children}
    </div>
  );
};

export const Right: ParentComponent = function (props) {

  return (
    <div
        class={right}

    >
      {props.children}
    </div>
  );
};

export const Apart: ParentComponent = function (props) {

  return (
    <div
        class={apart}

    >
      {props.children}
    </div>
  );
};