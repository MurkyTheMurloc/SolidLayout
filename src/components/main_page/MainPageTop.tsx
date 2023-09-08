import { ParentComponent } from "solid-js";

function generateAppShellMainPageTopStyle():{[key:string]:string}{
    return {
        "grid-area": "app-shell-main-page-container-top",
    }
}

export const MainPageTop:ParentComponent = function (props){
    return (
        <div style={generateAppShellMainPageTopStyle()} class="app-shell-main-page-container-top">
              {props.children}
            </div>
    )
}