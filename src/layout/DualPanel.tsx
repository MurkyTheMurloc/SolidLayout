import {JSXElement, ParentComponent} from "solid-js";
import {FlexBasis, Gap, MarginInline} from "../types/css_types";
import {
    dual_panel_container,
    dual_panel_main_panel,
    dual_panel_side_panel,
    gap,
    main_panel_size,
    marginInline,
    side_panel_size
} from "../styles/dual_panel.css";
import {assignInlineVars} from "@vanilla-extract/dynamic";

type DualPanelProps = {
    children: [JSXElement, JSXElement];
  gap?: Gap;
  marginInline?: MarginInline;
    mainPanelSize?: FlexBasis;
    sidePanelSize?: FlexBasis;
}


export const DualPanel: ParentComponent<DualPanelProps> = function (props) {


    return (
        // @ts-ignore
        <div style={assignInlineVars({
            [gap]: props.gap,
            [marginInline]: props.marginInline,
        })} class={dual_panel_container}>
            // @ts-ignore
            <div style={assignInlineVars({
                [main_panel_size]: props.mainPanelSize,
            })} class={dual_panel_main_panel}>
          {props.children[0]}
          </div>
            // @ts-ignore
            <div style={assignInlineVars(
                {[side_panel_size]: props.sidePanelSize,}
            )} class={dual_panel_side_panel}>
          {props.children[1]}
          </div>
      </div>

  );

}
