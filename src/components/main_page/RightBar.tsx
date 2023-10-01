import {type ParentComponent,} from "solid-js";
import {rightBar} from "styles/apps_shell_components/main_page/right_bar.css";


export const RightBar: ParentComponent = function (props) {

    return (
        <div class={rightBar}>
              {props.children}
        </div>
    )

}