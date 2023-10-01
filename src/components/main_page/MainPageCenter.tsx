import {type ParentComponent} from "solid-js";
import {mainPageCenter} from "../../styles/apps_shell_components/main_page/main_page_center.css";

export const MainPageCenter:ParentComponent = function (props){
    return (
        <div class={mainPageCenter}>
              {props.children}
            </div>
    )
}