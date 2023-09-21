import type {Accessor, ParentComponent} from "solid-js";
import {createContext, useContext} from "solid-js";


type AppShellStoreProps = {
    breakPoint: number
    appShellWidth: number
    appShellHeight: number
}

type AppShellStoreContext = {
    breakPoint: Accessor<number>
    appShellWidth: Accessor<number>
    appShellHeight: Accessor<number>
}
const AppShellStore = createContext<AppShellStoreContext>()


export const AppShellStateManager: ParentComponent<AppShellStoreProps> = function (props) {



    return (
        <AppShellStore.Provider
            value={{breakPoint: () => props.breakPoint, appShellWidth: () => props.appShellWidth, appShellHeight: () => props.appShellHeight, rightBarGridArea: () => props.rightBarGridArea, leftBarGridArea: () => props.leftBarGridArea}}>
            {props.children}
        </AppShellStore.Provider>
    )
};


export function useBreakPoint(): Accessor<number> {
    // @ts-ignore
    const breakPoint = useContext<AppShellStoreContext>(AppShellStore)
    if (typeof breakPoint.breakPoint === "undefined") {
        throw new Error("breakPoint is undefined")
    }

    return breakPoint.breakPoint
}


export function useAppShellWidth(): Accessor<number> {
    // @ts-ignore
    const appShellWidth = useContext<AppShellStoreContext>(AppShellStore)
    if (typeof appShellWidth.appShellWidth === "undefined") {
        throw new Error("appShellWidth is undefined")
    }


    return appShellWidth.appShellWidth
}

export function useAppShellHeight(): Accessor<number> {
    // @ts-ignore
    const appShellHeight = useContext<AppShellStoreContext>(AppShellStore)
    if (typeof appShellHeight.appShellHeight === "undefined") {
        throw new Error("appShellHeight is undefined")
    }

    return appShellHeight.appShellHeight
}

