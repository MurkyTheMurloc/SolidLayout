
import { ParentComponent,JSX } from "solid-js";


function generateAppShellFooterCenterStyle():JSX.CSSProperties{
    return {
        "grid-area": "footer-center",
        "min-width": "107px",
    }
}
export const FooterCenter:ParentComponent = function (props){
    return (
        <div style={generateAppShellFooterCenterStyle()} class="app-shell-footer-center">
              {props.children}
            </div>
    )
}