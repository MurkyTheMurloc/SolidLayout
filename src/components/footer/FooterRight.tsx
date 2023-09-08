import { ParentComponent } from "solid-js";

function generateAppShellHeaderStyle():{[key:string]:string}{
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