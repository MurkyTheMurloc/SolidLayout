import {JSX, ParentComponent} from "solid-js";

function generateAppShellMainContainerStyle(): JSX.CSSProperties {
    return {
        "grid-area": "main-container",
        display: "grid",
        "grid-template-areas": `"bar-left main-center-container bar-right"`,
        "grid-template-columns": "auto minmax(0,1fr) auto",
    }
}


export const PageCenterContainer:ParentComponent = function (props){
    return (
        <div style={generateAppShellMainContainerStyle()} class="app-shell-center-container">
              {props.children}
            </div>
    )
}