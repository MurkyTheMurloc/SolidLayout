
import {JSX, ParentComponent } from "solid-js";


function generateAppShellHeaderContainerStyle(): JSX.CSSProperties{

    return {
        "grid-area": "header-container",
         display: "grid",
        "grid-template-areas": `"header-left header-center header-right"`,
        "grid-template-columns": "auto minmax(0,1fr) auto",
        "grid-gap": "0.5rem",
        "margin": "1rem",

    }
}
export const HeaderContainer:ParentComponent = function (props){
    return (
        <div style={generateAppShellHeaderContainerStyle()}  class="app-shell-header-container">
            {props.children}
        </div>
    )
}