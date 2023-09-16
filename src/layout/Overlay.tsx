import type {ParentComponent } from "solid-js";
import { children, createEffect,  } from "solid-js";

import {createUniqueClassName} from "../helper/helper";

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

interface MoveToBackGroundProps {
    name?: string;
    position?: Position;
}

interface MoveToForeGroundProps {
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
            style={{
                position: props.position || "absolute",
                "z-index": zindex,
            }}
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
            style={{
                position:  props.position || "absolute",
                "z-index": zindex,
            }}
        >
            {c()}
        </div>
    );
}