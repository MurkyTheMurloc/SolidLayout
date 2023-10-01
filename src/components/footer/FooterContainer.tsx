import type {ParentComponent} from "solid-js";
import {footerContainer} from "../../styles/apps_shell_components/footer/footer_container.css";


export const FooterContainer:ParentComponent = function (props){
    return (
        <div class={footerContainer}>
              {props.children}
            </div>
    )
}