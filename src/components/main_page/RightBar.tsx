
import { ParentComponent,Accessor,JSX } from "solid-js";
import{BreakPointPosition,StartPosition} from "../../types/gridPosition"


function generateAppShellRightBarStyle(getGridArea:Accessor<BreakPointPosition|StartPosition>):JSX.CSSProperties{
    return {
        "grid-area": getGridArea(),
        width: "95%",
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