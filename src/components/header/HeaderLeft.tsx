import { ParentComponent } from "solid-js";


function generateAppShellHeaderLeftStyle ():{[key:string]:string}{
    return {
        "grid-area": "header-left",
    }
}

export const HeaderLeft:ParentComponent = function (props){

    return (
        <div style={generateAppShellHeaderLeftStyle()} class="app-shell-header-left">
                {props.children}
            </div>
    )

}