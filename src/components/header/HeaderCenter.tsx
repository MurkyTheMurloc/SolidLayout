import {JSX, ParentComponent } from "solid-js"
function generateAppShellHeaderStyle():JSX.CSSProperties{
    return {
        "grid-area": "header-center",
    }
}

export const HeaderCenter:ParentComponent = function (props){
    return (
        <div style={generateAppShellHeaderStyle()} class="app-shell-header-center">
              {props.children}
            </div>
    )
}
