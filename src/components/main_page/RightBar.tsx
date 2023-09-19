
import { ParentComponent,Accessor,JSX } from "solid-js";
import {BreakPointPosition, StartPosition} from "../../types/gridPosition.ts"


function generateAppShellRightBarStyle(getGridArea:Accessor<BreakPointPosition|StartPosition>):JSX.CSSProperties{
    return {
        "grid-area": getGridArea(),

    }
}
interface RightBarProps{
    getGridArea:Accessor<BreakPointPosition|StartPosition>
}
export const RightBar:ParentComponent<RightBarProps>= function (props){
    return (
        <div style={generateAppShellRightBarStyle(props.getGridArea)} class="app-shell-right-bar">
              {props.children}
        </div>
    )

}