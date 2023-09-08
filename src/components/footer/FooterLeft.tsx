import { ParentComponent } from "solid-js";

function generateAppShellHeaderStyle():{[key:string]:string}{
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