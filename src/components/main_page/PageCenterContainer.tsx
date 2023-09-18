import { ParentComponent,JSX } from "solid-js";

function generateAppShellMainContainerStyle():JSX.CSSProperties{
    return {
        "grid-area": "main-container",
        display: "grid",
        "grid-template-areas": `"bar-left main-center-container bar-right"`,

        "margin": "1rem",
        "grid-template-columns": "auto 6fr auto",
        "grid-gap": "1rem",
    }
}


export const PageCenterContainer:ParentComponent = function (props){
    return (
        <div style={generateAppShellMainContainerStyle()} class="app-shell-center-container">
              {props.children}
            </div>
    )
}