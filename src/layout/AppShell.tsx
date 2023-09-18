import {Accessor, ParentComponent, Show, JSXElement, Switch, Match, onMount, JSX, Component} from "solid-js";
import { useResponsiveLeftBarGrid, useResponsiveRightBarGrid } from "../hooks/useResponsiveGrid.ts";
import { BreakPointPosition, StartPosition } from "../types/gridPosition.ts";
import { HeaderContainer } from "../components/header/HeaderContainer.tsx";
import { HeaderCenter} from "../components/header/HeaderCenter.tsx";
import { HeaderLeft } from "../components/header/HeaderLeft.tsx";
import { HeaderRight } from "../components/header/HeaderRight.tsx";
import { FooterContainer } from "../components/footer/FooterContainer.tsx";
import { FooterCenter } from "../components/footer/FooterCenter.tsx";
import { FooterLeft } from "../components/footer/FooterLeft.tsx";
import { FooterRight } from "../components/footer/FooterRight.tsx";
import { PageCenterContainer } from "../components/main_page/PageCenterContainer.tsx";
import { LeftBar } from "../components/main_page/LeftBar.tsx";
import { RightBar } from "../components/main_page/RightBar.tsx";
import { MainPage } from "../components/main_page/MainPage.tsx";
import { MainPageTop } from "../components/main_page/MainPageTop.tsx";
import { MainPageBottom } from "../components/main_page/MainPageBottom.tsx"


function generateAppShellContainerStyle(): JSX.CSSProperties{
return {
    width: "100%",
    height: "100vh",
    display: "grid",
   "grid-template-areas": `"header-container header-container header-container"
                            "main-container main-container main-container"
                            "footer footer footer"`,

    "grid-template-rows": "auto 1fr auto",

                        }

}

interface AppShellProps {
    autoBreakPoints?: boolean;
    leftBarBreakPoint?: StartPosition | BreakPointPosition;
    rightBarBreakPoint?: StartPosition | BreakPointPosition;
    leftHeaderComponent?: JSXElement | JSXElement[] ;
    mainHeaderComponent?: JSXElement | JSXElement[] ;
    rightHeaderComponent?: JSXElement | JSXElement[] ;
    leftFooterComponent?: JSXElement | JSXElement[] ;
    mainFooterComponent?: JSXElement | JSXElement[] ;
    rightFooterComponent?: JSXElement | JSXElement[] ;
    leftBarComponent?: JSXElement | JSXElement[] ;
    rightBarComponent?: JSXElement | JSXElement[] ;
    bugerMenuComponent?: JSXElement | JSXElement[];
}


export const AppShell: ParentComponent<AppShellProps>=  function (props) {
    let getLeftBarBreakPoint:Accessor<BreakPointPosition|StartPosition>=()=>{return "bar-left"};
    let getRightBarBreakPoint:Accessor<BreakPointPosition|StartPosition> = ()=>{return "bar-right"};
    if(props.autoBreakPoints??true){
        onMount(()=>{
            getLeftBarBreakPoint = useResponsiveLeftBarGrid();
            getRightBarBreakPoint = useResponsiveRightBarGrid();
        })

    }


    return (
        <div style={generateAppShellContainerStyle()} class="app-shell-container">
            <HeaderContainer>
                <HeaderLeft>
                    {props.leftHeaderComponent}

            <Show when={getLeftBarBreakPoint()==="header-left" && getRightBarBreakPoint()!== "header-left"}>
               {props.bugerMenuComponent}
            </Show>
                </HeaderLeft>
           <HeaderCenter>
                {props.mainHeaderComponent}
                <Show when={getLeftBarBreakPoint()==="header-center" && getRightBarBreakPoint()!== "header-center"}>
               {props.bugerMenuComponent}
            </Show>
           </HeaderCenter>
              <HeaderRight>
                    {props.rightHeaderComponent}
            <Show when={getLeftBarBreakPoint()==="header-right" && getRightBarBreakPoint()!== "header-right"}>
                {props.bugerMenuComponent}
            </Show>
            </HeaderRight>
            </HeaderContainer>
            <PageCenterContainer>
                <Show when={getLeftBarBreakPoint()==="bar-left"}>
            <LeftBar getGridArea={getLeftBarBreakPoint}>
                {props.leftBarComponent}
            </LeftBar>
            </Show>
            <Show when={getLeftBarBreakPoint()==="bar-right"}>
            <RightBar getGridArea={getLeftBarBreakPoint}>
                {props.leftBarComponent}
            </RightBar>
            </Show>
            <MainPage>

                {props.children}
                <Show when={getLeftBarBreakPoint()=== ("app-shell-main-page-container-top" || "app-shell-main-page-container-bottom") || getRightBarBreakPoint()===("app-shell-main-page-container-bottom" ||"app-shell-main-page-container-top")}>
                <Switch>
                <Match when={getRightBarBreakPoint()==="app-shell-main-page-container-top" && getLeftBarBreakPoint() !== "app-shell-main-page-container-top"}>
                <MainPageTop>
                    {props.rightBarComponent}
                </MainPageTop>
                </Match>
                <Match when={getLeftBarBreakPoint()==="app-shell-main-page-container-top" }>
                <MainPageTop>
                    {props.leftBarComponent}
                </MainPageTop>
                </Match>
                <Match when={getLeftBarBreakPoint()==="app-shell-main-page-container-bottom" && getRightBarBreakPoint() !=="app-shell-main-page-container-bottom"}>
                <MainPageBottom>
                    {props.leftBarComponent}
                </MainPageBottom>

                </Match>
                <Match when={getRightBarBreakPoint()==="app-shell-main-page-container-bottom" && getLeftBarBreakPoint() !== "app-shell-main-page-container-bottom"}>
                 <MainPageBottom>
                    {props.rightBarComponent}
                </MainPageBottom>
                </Match>
                </Switch>

                </Show>

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