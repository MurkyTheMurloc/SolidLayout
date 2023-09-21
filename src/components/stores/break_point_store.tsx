import type {Accessor, ParentComponent} from "solid-js";
import {createContext, useContext} from "solid-js";
import {BreakPointPosition, StartPosition} from "../../types/gridPosition.ts";


type AppShellStoreProps = {
    breakPoint: number
    appShellWidth: number
    appShellHeight: number
    rightBarGridArea: StartPosition | BreakPointPosition
    leftBarGridArea: StartPosition | BreakPointPosition
}
const AppShellStore = createContext<AppShellStoreProps>()


export const AppShellStateManager: ParentComponent<AppShellStoreProps> = function (props) {



    return (
        <AppShellStore.Provider
            value={{breakPoint: () => props.breakPoint, appShellWidth: () => props.appShellWidth, appShellHeight: () => props.appShellHeight, rightBarGridArea: () => props.rightBarGridArea, leftBarGridArea: () => props.leftBarGridArea}}>
            {props.children}
        </AppShellStore.Provider>
    )
};


export function useBreakPoint(): Accessor<number> {

    return useContext<AppShellStoreProps>(AppShellStore).breakPoint
}


export function useAppShellWidth(): Accessor<number> {

    return useContext<AppShellStoreProps>(AppShellStore).appShellWidth
}

export function useAppShellHeight(): Accessor<number> {
    return useContext<AppShellStoreProps>(AppShellStore).appShellHeight
}

export function useRightBarGridArea(): Accessor<StartPosition | BreakPointPosition> {
    return useContext<AppShellStoreProps>(AppShellStore).rightBarGridArea
}

export function useLeftBarGridArea(): Accessor<StartPosition | BreakPointPosition> {
    return useContext<AppShellStoreProps>(AppShellStore).leftBarGridArea
}