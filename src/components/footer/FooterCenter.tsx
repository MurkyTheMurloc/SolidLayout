import type {ParentComponent} from "solid-js";
import {footerMain} from "../../styles/apps_shell_components/footer/footer_center.css";

export const FooterCenter:ParentComponent = function (props){
    return (
        <div class={footerMain}>
              {props.children}
            </div>
    )
}