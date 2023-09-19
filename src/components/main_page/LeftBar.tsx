
import { ParentComponent,Accessor, JSX } from "solid-js";
import {BreakPointPosition, StartPosition} from "../../types/gridPosition.ts"



function generateAppShellLeftBarStyle(getGridArea:Accessor<BreakPointPosition|StartPosition>):JSX.CSSProperties{
    return {
        "grid-area": getGridArea(),
    }
}

interface LeftBarProps{
    getGridArea:Accessor<BreakPointPosition|StartPosition>
}

export const LeftBar:ParentComponent<LeftBarProps> = function (props){
    return (
        <div style={generateAppShellLeftBarStyle(props.getGridArea)} class="app-shell-left-bar">
              {props.children}
        </div>
    )
}