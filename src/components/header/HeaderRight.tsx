import type {JSXElement, ParentComponent} from "solid-js";
import {displayValue, headerRight, headerRightBurgerMenu} from "styles/apps_shell_components/header/header_right.css";
import {assignInlineVars} from "@vanilla-extract/dynamic";


type HeaderRightProps = {
    children: [JSXElement, JSXElement]
}

export const HeaderRight: ParentComponent<HeaderRightProps> = function (props) {
        return (
            <>
                <div class={headerRight}>
                    {props.children[0]}
                </div>
                <div
                    style={assignInlineVars({
                        [displayValue]: props.children[1] ? "block" : "none"
                    })}
                    class={headerRightBurgerMenu}>
                    {props.children[1]}
                </div>
            </>

        )

}