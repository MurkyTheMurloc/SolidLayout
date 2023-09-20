import type {Accessor, ParentComponent} from "solid-js";
import {createContext, createEffect, onMount, useContext} from "solid-js";


type AppShellStoreProps = {
    breakPoint: number
    appShellWidth: number
    appShellHeight: number
}
const AppShellStore = createContext<AppShellStoreProps>()


export const AppShellStateManager: ParentComponent<AppShellStoreProps> = function (props) {



    return (
        <AppShellStore.Provider value={{
            breakPoint: () => props.breakPoint,
            appShellWidth: () => props.appShellWidth,
            appShellHeight: () => props.appShellHeight
        }}>
            {props.children}
        </AppShellStore.Provider>
    )
};


export function useBreakPoint(): Accessor<number> {

    return useContext<AppShellStoreProps>(AppShellStore).breakPoint
}


export function useAppShellWidth(): Accessor<number> {
    console.log(useContext<AppShellStoreProps>(AppShellStore))
    return useContext<AppShellStoreProps>(AppShellStore).appShellWidth
}

export function useAppShellHeight(): Accessor<number> {
    return useContext<AppShellStoreProps>(AppShellStore).appShellHeight
}