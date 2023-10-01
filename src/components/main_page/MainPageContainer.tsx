import type {ParentComponent} from "solid-js";

import {mainPageCenterContainer} from "styles/apps_shell_components/main_page/main_page_container.css";

export const MainPage: ParentComponent = function (props) {
    return (
        <div class={mainPageCenterContainer}>
              {props.children}
        </div>
    )
}