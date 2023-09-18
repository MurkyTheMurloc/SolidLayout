import {JSX, ParentComponent} from "solid-js";


function generateAppShellHeaderRightStyle():JSX.CSSProperties{
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