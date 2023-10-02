import {createVar, fallbackVar, style} from "@vanilla-extract/css";
import {appShell} from "./app_shell.css";

export const direction = createVar();
export const gridAutoColumns = createVar();
export const scrollBehavior = createVar();
export const gap = createVar();
export const padding = createVar();
export const scrollType = createVar();
export const scrollAlignment = createVar();
export const scrollPadding = createVar();
export const overflowX = createVar();
export const overflowY = createVar();
export const breakPointDirection = createVar();
export const breakpointAutoColumns = createVar();

const small = createVar();
const medium = createVar();
const large = createVar();
const xLarge = createVar();
const xxLarge = createVar();


export const reelGrid = style({
    display: "grid",
    gridAutoFlow: fallbackVar(direction, "row"),
    gridAutoColumns: fallbackVar(gridAutoColumns, "100%"),
    scrollBehavior: fallbackVar(scrollBehavior, "smooth"),
    scrollSnapType: fallbackVar(scrollType, "x mandatory"),
    scrollSnapAlign: fallbackVar(scrollAlignment, "start"),
    scrollPadding: fallbackVar(scrollPadding, "1rem"),
    overflowX: fallbackVar(overflowX, "auto"),
    overflowY: fallbackVar(overflowY, "hidden"),
    gap: fallbackVar(gap, "0rem"),
    padding: fallbackVar(padding, "0rem"),
    "@container": {
        [`${appShell} (max-width: ${fallbackVar(small, "640px")})`]: {
            gridAutoFlow: fallbackVar(breakPointDirection, "column"),
            gridAutoColumns: fallbackVar(breakpointAutoColumns, "max-content"),

        },
        [`${appShell} (max-width: ${fallbackVar(medium, "768px")})`]: {
            gridAutoFlow: fallbackVar(breakPointDirection, "column"),
            gridAutoColumns: fallbackVar(breakpointAutoColumns, "max-content"),

        },
        [`${appShell} (max-width: ${fallbackVar(large, "1024px")})`]: {
            gridAutoFlow: fallbackVar(direction, "row"),
            gridAutoColumns: fallbackVar(gridAutoColumns, "100%")
        },
        [`${appShell} (min-width: ${fallbackVar(xLarge, "1280px")})`]: {
            gridAutoFlow: fallbackVar(direction, "row"),
            gridAutoColumns: fallbackVar(gridAutoColumns, "100%")
        },
        [`${appShell} (min-width: ${fallbackVar(xxLarge, "1536px")})`]: {
            gridAutoFlow: fallbackVar(direction, "row"),
            gridAutoColumns: fallbackVar(gridAutoColumns, "100%")
        },

    }
});