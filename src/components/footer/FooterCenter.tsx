import {JSX, ParentComponent} from "solid-js";

function generateAppShellFooterCenterStyle():JSX.CSSProperties{
    return {
        "grid-area": "footer-center",
    }
}
export const FooterCenter:ParentComponent = function (props){
    return (
        <div style={generateAppShellFooterCenterStyle()} class="app-shell-footer-center">
              {props.children}
            </div>
    )
}