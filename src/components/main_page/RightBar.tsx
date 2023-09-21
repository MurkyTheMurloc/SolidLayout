import {JSX, type ParentComponent,} from "solid-js";


function generateAppShellRightBarStyle(): JSX.CSSProperties {
    return {
        "grid-area": "bar-right"
    }
}

export const RightBar: ParentComponent = function (props) {

    return (
        <div style={generateAppShellRightBarStyle()} class="app-shell-right-bar">
              {props.children}
        </div>
    )

}