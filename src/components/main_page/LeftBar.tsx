import type {ParentComponent} from "solid-js";
import {leftBar} from "../../styles/apps_shell_components/main_page/left_bar.css";


export const LeftBar: ParentComponent = function (props) {

    return (
        <div class={leftBar}>
              {props.children}
        </div>
    )
}