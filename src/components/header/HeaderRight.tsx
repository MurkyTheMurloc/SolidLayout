import { ParentComponent } from "solid-js";


function generateAppShellHeaderRightStyle():{[key:string]:string}{
    return {
        "grid-area": "header-right",
    }
}

export const HeaderRight:ParentComponent = function (props){
    
        return (
            <div style={generateAppShellHeaderRightStyle()} class="app-shell-header-right">
                    {props.children}
                </div>
        )

}