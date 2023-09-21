import {JSX, ParentComponent} from "solid-js";

function generateAppShellMainPageTopStyle():JSX.CSSProperties{
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