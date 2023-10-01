import type {JSX, ParentComponent} from "solid-js";
import {children, createEffect,} from "solid-js";

import {createUniqueClassName} from "../helper/helper";
import {moveToForeGround, positionForeGround, zIndexForGround} from "../styles/overlay/move_to_fore_ground.css";
import {assignInlineVars} from "@vanilla-extract/dynamic";
import {moveToBackGround, zIndexBackground} from "../styles/overlay/move_to_background.css";

const trackZindexBackground: {[key:string]:string} = {};
const trackZindexForeground: {[key:string]:string} = {};

type Position = "relative" | "absolute" | "fixed" | "sticky";

function generateRandomNegativeZindex(name:string=createUniqueClassName("zIndex")): string {
    if(trackZindexBackground[name]){
        return trackZindexBackground[name];
    }
    const random = Math.floor(Math.random() * 1000000);

    trackZindexBackground[name] = `-${random}`;
    return `-${random}`;
}

function generateRandomPositiveZindex(name:string=createUniqueClassName("zIndex")): string {
    if(trackZindexForeground[name]){
        return trackZindexForeground[name];
    }
    const random = Math.floor(Math.random() * 1000000);

    trackZindexForeground[name] = `${random}`;
    return `${random}`;
}

interface MoveToBackGroundProps extends JSX.DOMAttributes<HTMLDivElement>  {
    name?: string;
    position?: Position;
}

interface MoveToForeGroundProps  extends JSX.DOMAttributes<HTMLDivElement> {
    name?: string;
    position?:Position;
}
export const MoveToBackGround: ParentComponent<MoveToBackGroundProps> = function (props) {
    const zindex =  generateRandomNegativeZindex(props.name)
    const c = children(() => props.children);
    // @ts-ignore
    createEffect(() =>
        // @ts-ignore
        c().forEach((item) => {
            (item.style.position =  props.position || "absolute"), (item.style.zIndex = zindex);
        })
    );

    return (
        <div
            // @ts-ignore
            style={assignInlineVars({
                [zIndexBackground]: zindex,
                [positionForeGround]: props.position
            })}
            class={moveToBackGround}
            {...props}
        >
            {c()}
        </div>
    );
};


export const MoveToForeGround: ParentComponent<MoveToForeGroundProps> = function (props) {
    const zindex =  generateRandomPositiveZindex(props.name)
    const c = children(() => props.children);
    // @ts-ignore
    createEffect(() =>
        // @ts-ignore
        c().forEach((item) => {
            (item.style.position =  props.position || "absolute"), (item.style.zIndex = zindex);
        })
    );

    return (
        <div
        {...props}
        style={
            // @ts-ignore
            assignInlineVars({
                [zIndexForGround]: zindex,
                [positionForeGround]: props.position
            })
        }
        class={moveToForeGround}
        >
            {c()}
        </div>
    );
}
