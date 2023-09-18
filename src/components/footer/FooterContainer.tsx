import {JSX, ParentComponent} from "solid-js";

function generateAppShellHeaderStyle():JSX.CSSProperties{
    return {
         "grid-area": "footer",
            display: "grid",
            "grid-template-areas": `"footer-left footer-center footer-right"`,
            "grid-template-columns": "auto 1fr auto",
            "grid-gap": "1rem",

    }
}

export const FooterContainer:ParentComponent = function (props){
    return (
        <div style={generateAppShellHeaderStyle()} class="app-shell-footer-container">
              {props.children}
            </div>
    )
}