import {JSX, ParentComponent} from "solid-js";

function generateAppShellFooterLeftStyle():JSX.CSSProperties{
    return {
        "grid-area":  "app-shell-main-page-container-center",
    }
}

export const MainPageCenter:ParentComponent = function (props){
    return (
        <div style={generateAppShellFooterLeftStyle()} class="app-shell-main-page-container-center">
              {props.children}
            </div>
    )
}