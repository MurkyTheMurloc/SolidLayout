import {type  Setter} from "solid-js";
import {BreakPointPosition, StartPosition} from "../types/gridPosition";
import {GridAutoFlow, Size} from "../types/css_types";


function useResizeObserver(appShell: HTMLDivElement, setWindowWidth: Setter<number>, setWindowHeight: Setter<number>): void {
  const updateWindow = () => {
    setWindowWidth(appShell.clientWidth);
    setWindowHeight(appShell.clientHeight);
  };

  new ResizeObserver(updateWindow).observe(appShell);

}

export function useResponsiveGridLeftBar(
    setBreakPointPosition: Setter<BreakPointPosition | StartPosition>,
    setGridGap: Setter<Size>,
    windowWidth: number,
    breakPointPosition: BreakPointPosition,
  breakPoint: number,
  startPosition: StartPosition
): void {


  if (windowWidth <= breakPoint) {
    setBreakPointPosition(breakPointPosition);
      setGridGap("1rem")
    }
  if (windowWidth > breakPoint) {
    setGridGap("0rem")
    setBreakPointPosition(startPosition);
  }

}

export function useResponsiveGridRightBar(
    setBreakPointPosition: Setter<BreakPointPosition | StartPosition>,
    setGridGap: Setter<Size>,
    windowWidth: number,
    breakPointPosition: BreakPointPosition,
    breakPoint: number,
    startPosition: StartPosition
): void {


  if (windowWidth <= breakPoint) {

    setBreakPointPosition(breakPointPosition);
    setGridGap("1rem")
    return;
  }
  if (windowWidth > breakPoint) {

    setGridGap("0rem")
    setBreakPointPosition(startPosition);
    return;
  }

}


function useresponsiveReel(setRowType: Setter<GridAutoFlow>, setColumnWidth: Setter<Size>, windowWidth: number, windowHeight: number, breakPoint: number): void {

  if (typeof breakPoint !== "undefined") {
    if (windowWidth <= breakPoint) {

            setRowType("column");
            setColumnWidth("max-content");

      return;

    }
    if (windowWidth > breakPoint) {
            setRowType("row");
            setColumnWidth("100%");
      return;

    }
  }

  if (windowWidth > windowHeight) {
    setRowType("column");
    setColumnWidth("max-content");
    return;
  }






}


export {useresponsiveReel, useResizeObserver};
