import {createVar, fallbackVar, style} from "@vanilla-extract/css";

export const gap = createVar();
export const padding = createVar();
export const marginInline = createVar();
export const main_panel_size = createVar();
export const side_panel_size = createVar();
export const dual_panel_container = style({
    display: "flex",
    flexWrap: "wrap",
    alignItems: "start",
    marginInline: fallbackVar(marginInline, "auto"),
    gap: fallbackVar(gap, "1rem"),
});

export const dual_panel_main_panel = style({
    flexBasis: fallbackVar(main_panel_size, "500px"),
    flexGrow: 9999,
});

export const dual_panel_side_panel = style({
    flexBasis: fallbackVar(side_panel_size, "300px"),
    flexGrow: 1,

});