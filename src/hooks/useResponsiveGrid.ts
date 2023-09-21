import {createSignal, onCleanup, type  Setter} from "solid-js";
import {BreakPointPosition, StartPosition} from "../types/gridPosition";
import {GridAutoFlow, Size} from "../types/css_types";
import {BREAKPOINT_POSITION} from "../enums/break_point_enum";


// @ts-ignore
function useResizeObserver(appShell: HTMLDivElement, setWindowWidth: Setter<number>, setWindowHeight: Setter<number>): void {
  const updateWindow = () => {
    setWindowWidth(appShell.clientWidth);
    setWindowHeight(appShell.clientHeight);
  };

  // @ts-ignore
  new ResizeObserver(updateWindow).observe(appShell);

}

export function useResponsiveGridLeftBar(
    setBreakPointPosition: Setter<BreakPointPosition | StartPosition>,
    setGridGap: Setter<Size>,
    windowWidth: number,
    breakPointPosition: BreakPointPosition = BREAKPOINT_POSITION.TOP_RIGHT,
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
    breakPointPosition: BreakPointPosition = BREAKPOINT_POSITION.MAIN_TOP,
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


export function useAutoBreakPoints(autoFill: boolean = true, minColumnWidth: number = 200, breakPointLayout: BreakPointLayout = {}): Accessor<string> {

  const [windowWidth, setWindowWidth] = createSignal(window.innerWidth);

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  window.addEventListener("resize", updateWindowWidth);

  // Clean up the event listener when the component unmounts
  onCleanup(() => {
    window.removeEventListener("resize", updateWindowWidth);
  });
  if (Object.keys(breakPointLayout).length === 0) {
    const getBreakPoints = (): string => {
      const defaultBreakPoints: { [key: number]: string } = {
        480: `repeat(${autoFill ? 'auto-fill' : 'auto-fit'}, minmax(${minColumnWidth - 100 || "100"}px, 1fr))`,
        768: `repeat(${autoFill ? 'auto-fill' : 'auto-fit'}, minmax(${minColumnWidth - 50 || "150"}px, 1fr));`,
        1024: `repeat(${autoFill ? 'auto-fill' : 'auto-fit'}, minmax(${minColumnWidth || "200px"}, 1fr));`,
      }
      const breakPoints = Object.keys(defaultBreakPoints).map((breakPoint) => parseInt(breakPoint, 10)).sort((a, b) => a - b);
      for (let i = breakPoints.length; i >= 0; i--) {
        const index = i - 1;
        if (windowWidth() >= breakPoints[index] && i === breakPoints.length) {
          return defaultBreakPoints[breakPoints[index]];
        }
        if (windowWidth() >= breakPoints[index] && windowWidth() <= breakPoints[i]) {
          return defaultBreakPoints[breakPoints[i]];
        }
        if (windowWidth() <= breakPoints[index] && windowWidth() >= breakPoints[index - 1]) {
          return defaultBreakPoints[breakPoints[index]];
        } else {
          return `repeat(${autoFill ? 'auto-fill' : 'auto-fit'}, minmax(${minColumnWidth || "100"}px, 1fr))`;
        }

      }
      return `repeat(${autoFill ? 'auto-fill' : 'auto-fit'}, minmax(${minColumnWidth || "150"}px, 1fr));`;
    };

    return getBreakPoints;
  } else {
    return (): string => {
      const defaultBreakPoints: { [key: number]: string } = {}

      for (const key in breakPointLayout) {
        defaultBreakPoints[key] = `repeat(${autoFill ? 'auto-fill' : 'auto-fit'}, minmax(${breakPointLayout[key]}, 1fr));`
      }
      const breakPoints = Object.keys(defaultBreakPoints).map((breakPoint) => parseInt(breakPoint, 10)).sort((a, b) => a - b);
      for (let i = breakPoints.length; i >= 0; i--) {
        const index = i - 1;
        if (windowWidth() >= breakPoints[index] && i === breakPoints.length) {
          return defaultBreakPoints[breakPoints[index]];
        }
        if (windowWidth() >= breakPoints[index] && windowWidth() <= breakPoints[i]) {
          return defaultBreakPoints[breakPoints[i]];
        }
        if (windowWidth() <= breakPoints[index] && windowWidth() >= breakPoints[index - 1]) {
          return defaultBreakPoints[breakPoints[index]];
        } else {
          return `repeat(${autoFill ? 'auto-fill' : 'auto-fit'}, minmax(${minColumnWidth || "100"}px, 1fr))`;
        }

      }
      return `repeat(${autoFill ? 'auto-fill' : 'auto-fit'}, minmax(${minColumnWidth || "150"}px, 1fr));`;
    };
  }

}



export {useresponsiveReel, useResizeObserver};
