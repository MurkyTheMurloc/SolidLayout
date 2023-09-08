import { ParentComponent } from "solid-js";

function generateAppShellHeaderStyle():{[key:string]:string}{
    return {
        "grid-area": "footer",
            display: "grid",
            "grid-area-template": `"footer-left footer-center footer-right"`,
            "grid-template-columns": "auto 1fr auto",

    }
}

export const FooterContainer:ParentComponent = function (props){
    return (
        <div style={generateAppShellHeaderStyle()} class="app-shell-footer-container">
              {props.children}
            </div>
    )
}