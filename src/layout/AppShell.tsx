import {type JSXElement, type ParentComponent, Show,} from "solid-js";
import {BreakPointPosition} from "../types/gridPosition";
import {HeaderContainer} from "../components/header/HeaderContainer";
import {HeaderCenter} from "../components/header/HeaderCenter";
import {HeaderLeft} from "../components/header/HeaderLeft";
import {HeaderRight} from "../components/header/HeaderRight";
import {FooterContainer} from "../components/footer/FooterContainer";
import {FooterCenter} from "../components/footer/FooterCenter";
import {FooterLeft} from "../components/footer/FooterLeft";
import {FooterRight} from "../components/footer/FooterRight";
import {PageCenterContainer} from "../components/main_page/PageCenterContainer";
import {LeftBar} from "../components/main_page/LeftBar";
import {RightBar} from "../components/main_page/RightBar";
import {MainPage} from "../components/main_page/MainPageContainer";
import {MainPageTop} from "../components/main_page/MainPageTop";
import {MainPageBottom} from "../components/main_page/MainPageBottom"
import {MainPageCenter} from "../components/main_page/MainPageCenter";

import {appShellBreakPoint, appShellContainer} from "../styles/app_shell.css";
import {BREAKPOINT_POSITION} from "../enums/break_point_enum";
import {Size} from "../types/css_types";
import {assignInlineVars} from "@vanilla-extract/dynamic";


type AppShellProps = {
    leftBarBreakPoint?: BreakPointPosition;
    rightBarBreakPoint?: BreakPointPosition;
    leftHeaderComponent?: JSXElement | JSXElement[];
    mainHeaderComponent?: JSXElement | JSXElement[];
    rightHeaderComponent?: JSXElement | JSXElement[];
    leftFooterComponent?: JSXElement | JSXElement[];
    mainFooterComponent?: JSXElement | JSXElement[];
    rightFooterComponent?: JSXElement | JSXElement[];
    leftBarComponent?: JSXElement | JSXElement[];
    rightBarComponent?: JSXElement | JSXElement[];
    bugerMenuComponent?: JSXElement | JSXElement[];
    appShellBreakPoint?: Size;
}


export const AppShell: ParentComponent<AppShellProps> = function (props) {
    return (

        <div
            style={assignInlineVars({
                [appShellBreakPoint]: props.appShellBreakPoint ?? "765px"
            })}
            class={appShellContainer}>
            <HeaderContainer>
                <HeaderLeft>
                    {[props.leftHeaderComponent,
                        (props.leftBarBreakPoint === BREAKPOINT_POSITION.TOP_LEFT || props.rightBarBreakPoint === BREAKPOINT_POSITION.TOP_LEFT) ? props.bugerMenuComponent : undefined
                    ]}
                </HeaderLeft>
                <HeaderCenter>
                    {[props.mainHeaderComponent,
                        (props.leftBarBreakPoint === BREAKPOINT_POSITION.TOP_CENTER || props.rightBarBreakPoint === BREAKPOINT_POSITION.TOP_CENTER) ? props.bugerMenuComponent : undefined]}
                </HeaderCenter>
                <HeaderRight>
                    {[props.rightHeaderComponent,
                        (props.leftBarBreakPoint === BREAKPOINT_POSITION.TOP_RIGHT || props.rightBarBreakPoint === BREAKPOINT_POSITION.TOP_RIGHT) ? props.bugerMenuComponent : undefined]}
                </HeaderRight>
            </HeaderContainer>
            <PageCenterContainer>
                    <LeftBar>
                        {props.leftBarComponent}
                    </LeftBar>
                    <RightBar>
                        {props.rightBarComponent}
                    </RightBar>
                <MainPage>
                    <MainPageCenter>
                        {props.children}
                    </MainPageCenter>
                    <MainPageTop
                        breakPoint={props.leftBarBreakPoint === BREAKPOINT_POSITION.MAIN_BOTTOM ? props.leftBarBreakPoint : props.rightBarBreakPoint}>

                        <Show when={props.leftBarBreakPoint === BREAKPOINT_POSITION.MAIN_TOP}>
                            {props.leftBarComponent}
                        </Show>
                        <Show when={props.rightBarBreakPoint === BREAKPOINT_POSITION.MAIN_TOP}>
                            {props.rightBarComponent}
                        </Show>
                    </MainPageTop>
                    <MainPageBottom
                        breakPoint={props.leftBarBreakPoint === BREAKPOINT_POSITION.MAIN_BOTTOM ? props.leftBarBreakPoint : props.rightBarBreakPoint}>
                        <Show when={props.leftBarBreakPoint === BREAKPOINT_POSITION.MAIN_BOTTOM}>
                            {props.leftBarComponent}
                        </Show>
                        <Show when={props.rightBarBreakPoint === BREAKPOINT_POSITION.MAIN_BOTTOM}>
                            {props.rightBarComponent}
                        </Show>
                    </MainPageBottom>
                </MainPage>

            </PageCenterContainer>
            <FooterContainer>
                <FooterLeft>
                    {props.leftFooterComponent}
                </FooterLeft>
                <FooterCenter>
                    {props.mainFooterComponent}
                    </FooterCenter>
                    <FooterRight>
                        {props.rightFooterComponent}
                    </FooterRight>
            </FooterContainer>
        </div>

    )
};