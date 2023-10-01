import {type ParentComponent} from "solid-js";
import {mainPageBottom, mainPageBottomBreakPoint} from "styles/apps_shell_components/main_page/main_page_bottom.css";
import {BreakPointPosition} from "../../types/gridPosition";
import {assignInlineVars} from "@vanilla-extract/dynamic";
import {BREAKPOINT_POSITION} from "../../enums/break_point_enum";


export type MainPageBottomProps = {
    breakPoint?: BreakPointPosition
}
export const MainPageBottom: ParentComponent<MainPageBottomProps> = function (props) {
    return (
        <div
            style={assignInlineVars({
                [mainPageBottomBreakPoint]: props.breakPoint === BREAKPOINT_POSITION.MAIN_BOTTOM ? "block" : "none"
            })}
            class={mainPageBottom}>
              {props.children}
            </div>
    )
}