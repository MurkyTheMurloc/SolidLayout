import { ParentComponent,Accessor } from "solid-js";
import{BreakPointPosition,StartPosition} from "../../types/gridPosition.ts"

function generateAppShellRightBarStyle(getGridArea:Accessor<BreakPointPosition|StartPosition>):{[key:string]:string}{
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