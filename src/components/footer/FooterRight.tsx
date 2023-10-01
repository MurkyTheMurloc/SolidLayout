import type {ParentComponent} from "solid-js";
import {footerRight} from "../../styles/apps_shell_components/footer/footer_right.css";

export const FooterRight:ParentComponent = function (props){
    return (
        <div class={footerRight}>
              {props.children}
            </div>
    )
}