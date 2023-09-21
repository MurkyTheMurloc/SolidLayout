import {JSX, ParentComponent} from "solid-js";
import {BREAKPOINT_POSITION} from "../../enums/break_point_enum";

function generateAppShellMainPageBottomStyle():JSX.CSSProperties{
    return {
        "grid-area": BREAKPOINT_POSITION.MAIN_BOTTOM,
    }
}

export const MainPageBottom:ParentComponent = function (props){
    return (
        <div style={generateAppShellMainPageBottomStyle()} class="app-shell-main-page-bottom">
              {props.children}
            </div>
    )
}