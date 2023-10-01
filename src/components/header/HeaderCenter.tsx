import type {JSXElement, ParentComponent} from "solid-js"
import {
    displayValue,
    headerCenter,
    headerCenterBurgerMenu
} from "../../styles/apps_shell_components/header/header_center.css";
import {assignInlineVars} from "@vanilla-extract/dynamic";


type HeaderCenterProps = {
    children: [JSXElement, JSXElement]
}
export const HeaderCenter: ParentComponent<HeaderCenterProps> = function (props) {
    return (
        <>
            <div class={headerCenter}>
                {props.children[0]}
            </div>
            <div
                style={assignInlineVars({
                    [displayValue]: props.children[1] ? "block" : "none"
                })}
                class={headerCenterBurgerMenu}>
                {props.children[1]}
            </div>
        </>
    )
}
