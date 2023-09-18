
import {JSX, ParentComponent } from "solid-js";


function generateAppShellHeaderStyle():JSX.CSSProperties{
    return {
        "grid-area": "footer-left",

    }
}
export const FooterLeft:ParentComponent = function (props){
    return (
        <div style={generateAppShellHeaderStyle()} class="app-shell-footer-left">
              {props.children}
            </div>
    )
}