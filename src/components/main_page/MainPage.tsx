
import {JSX, ParentComponent } from "solid-js";


function generateAppShellMainStyle():JSX.CSSProperties{
    return {
        "grid-area": "main-center-container",
        display: "grid",
        "grid-template-areas": `"app-shell-main-page-container-top"
                                "app-shell-main-page-container-center"
                                "app-shell-main-page-container-bottom"`,
        "grid-template-rows": "1fr auto 1fr",
        "grid-gap": "1rem",
    }
}

export const MainPage:ParentComponent = function (props){
    return (
        <div style={generateAppShellMainStyle()} class="app-shell-main-page-container">
              {props.children}
            </div>
    )
}