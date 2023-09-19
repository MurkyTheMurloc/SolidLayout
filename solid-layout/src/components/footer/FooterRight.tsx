import {JSX, ParentComponent} from "solid-js";

function generateAppShellHeaderStyle():JSX.CSSProperties{
    return {
        "grid-area": "footer-right",
    }
}

export const FooterRight:ParentComponent = function (props){
    return (
        <div style={generateAppShellHeaderStyle()} class="app-shell-footer-right">
              {props.children}
            </div>
    )
}