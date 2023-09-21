import {JSX, ParentComponent} from "solid-js";


function generateAppShellLeftBarStyle(): JSX.CSSProperties {
    return {
        "grid-area": "bar-left",
    }
}


export const LeftBar: ParentComponent = function (props) {

    return (
        <div style={generateAppShellLeftBarStyle()} class="app-shell-left-bar">
              {props.children}
        </div>
    )
}