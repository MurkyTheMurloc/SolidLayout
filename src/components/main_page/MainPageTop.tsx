import {type ParentComponent} from "solid-js";
import {mainPageTop, mainPageTopBreakPoint} from "../../styles/apps_shell_components/main_page/main_page_top.css";
import {assignInlineVars} from "@vanilla-extract/dynamic";
import {BREAKPOINT_POSITION} from "../../enums/break_point_enum";
import {BreakPointPosition} from "../../types/gridPosition";

type MainPageTopProps = {
    breakPoint?: BreakPointPosition
}
export const MainPageTop: ParentComponent<MainPageTopProps> = function (props) {
    return (
        <div
            style={assignInlineVars({
                [mainPageTopBreakPoint]: props.breakPoint === BREAKPOINT_POSITION.MAIN_TOP ? "visible" : "block"
            })}
            class={mainPageTop}>
              {props.children}
            </div>
    )
}