import {type ParentComponent} from "solid-js";
import {pageCenterContainer} from "styles/apps_shell_components/main_page/main_page.css";


export const PageCenterContainer:ParentComponent = function (props){
    return (
        <div class={pageCenterContainer}>
              {props.children}
            </div>
    )
}