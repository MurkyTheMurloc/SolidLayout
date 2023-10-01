import type {ParentComponent} from "solid-js";
import {headerContainer} from "../../styles/apps_shell_components/header/header_container.css";


export const HeaderContainer:ParentComponent = function (props){
    return (
        <div class={headerContainer}>
            {props.children}
        </div>
    )
}