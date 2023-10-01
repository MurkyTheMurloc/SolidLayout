import type {ParentComponent} from "solid-js";
import {footerLeft} from "../../styles/apps_shell_components/footer/footer_left.css";


export const FooterLeft:ParentComponent = function (props){
    return (
        <div class={footerLeft}>
              {props.children}
            </div>
    )
}