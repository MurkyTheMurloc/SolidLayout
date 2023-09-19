
import {JSX, ParentComponent, createSignal, Accessor} from "solid-js";


function generateAppShellMainStyle(gridGap:Accessor<string>):JSX.CSSProperties{
    return {
        "grid-area": "main-center-container",
        display: "grid",
        "grid-template-areas": `"app-shell-main-page-container-top"
                                "app-shell-main-page-container-center"
                                "app-shell-main-page-container-bottom"`,
        "grid-template-rows": "auto 1fr auto",
        "grid-gap": gridGap(),



    }
}

interface MainPageProps{
    gridGap:Accessor<string>;
}
export const MainPage:ParentComponent<MainPageProps> = function (props){


    return (
        <div style={generateAppShellMainStyle(props.gridGap)} class="app-shell-main-page-container">
              {props.children}
            </div>
    )
}