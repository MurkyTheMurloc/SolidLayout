import type {ParentComponent} from "solid-js";
import {createContext, useContext} from "solid-js";


const BreakPoints = createContext<number>()

type BreakPointStoreProps = {
    breakPoint?: number
}
export  const  BreakPointStore:ParentComponent<BreakPointStoreProps> = function (props) {

    return (
        <BreakPoints.Provider value={props.breakPoint || 757}>
            {props.children}
        </BreakPoints.Provider>
    )
};


export  function  useBreakPoint():number|undefined {
    return useContext(BreakPoints)
}