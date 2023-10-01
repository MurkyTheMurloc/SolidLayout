import type {JSXElement, ParentComponent} from "solid-js";
import {
    displayValue,
    headerLeft,
    headerLeftBurgerMenu
} from "../../styles/apps_shell_components/header/header_left.css";
import {assignInlineVars} from "@vanilla-extract/dynamic";

type HeaderLeftProps = {
    children: [JSXElement, JSXElement | undefined]
}
export const HeaderLeft: ParentComponent<HeaderLeftProps> = function (props) {

    return (
        <>
            <div class={headerLeft}>
                {props.children[0]}
            </div>
            <div
                style={assignInlineVars({
                    [displayValue]: props.children[1] ? "block" : "none"
                })}
                class={headerLeftBurgerMenu}>
                {props.children[1]}
            </div>
        </>
    )

}