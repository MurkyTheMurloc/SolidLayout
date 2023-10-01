import type {ParentComponent} from "solid-js";
import {bottom, height, left, right, simple_bar, top, width} from "../styles/simple_bar.css";
import {Height, Width} from "../types/css_types";
import {assignInlineVars} from "@vanilla-extract/dynamic";


function calculatePosition(position: "top" | "bottom" | "left" | "right" = "top") {
    switch (position) {
        case "top":
            return {[top]: "0px", [left]: "0px", [right]: "auto", [bottom]: "auto"};
        case "bottom":
            return {[top]: "auto", [left]: "0px", [right]: "0px", [bottom]: "0px"};
        case "left":
            return {[top]: "0px", [left]: "0px", [right]: "auto", [bottom]: "auto", position: "fixed"};
        case "right":
            return {[top]: "0px", [left]: "auto", [right]: "0px", [bottom]: "auto"};

        default:
            return {[top]: "0px", [left]: "0px", [right]: "auto", [bottom]: "auto"};
    }
}

type SimpleBarProps = {
    position?: "top" | "bottom" | "left" | "right";
    height?: Height;
    width?: Width;
}
export const SimpleBar: ParentComponent<SimpleBarProps> = function (props) {

    return (
        // @ts-ignore
        <div style={assignInlineVars({
            [height]: props.height,
            [width]: props.width,
            ...calculatePosition(props.position)
        })} class={simple_bar}>
            {props.children}
        </div>
    )
}