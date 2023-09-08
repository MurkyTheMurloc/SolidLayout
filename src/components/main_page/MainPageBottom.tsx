import { ParentComponent } from "solid-js";

function generateAppShellMainPageBottomStyle():{[key:string]:string}{
    return {
        "grid-area": "app-shell-main-page-container-bottom",
    }
}

export const MainPageBottom:ParentComponent = function (props){
    return (
        <div style={generateAppShellMainPageBottomStyle()} class="app-shell-main-page-bottom">
              {props.children}
            </div>
    )
}