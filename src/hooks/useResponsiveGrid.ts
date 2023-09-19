import {Accessor, createSignal, onCleanup, Setter} from "solid-js";
import { BreakPointPosition,StartPosition } from "../types/gridPosition";
import {BreakPointLayout} from "../types/break_point_layout";
import {BREAKPOINT_POSITION} from "../enums/break_point_enum";
import {GridAutoFlow, Size} from "../types/css_types";
import {useBreakPoint} from "../components/stores/break_point_store";



function useResponsiveGrid(
    setBreakPointPosition: Setter<BreakPointPosition | StartPosition>,
    setGridGap: Setter<Size>,
    appShell: HTMLDivElement,
  position: BreakPointPosition,
  breakPoint: number,
  startPosition: StartPosition
): void {
  const [windowWidth, setWindowWidth] = createSignal<number>(appShell.clientWidth);

  const updateWindowWidth = () => {
    setWindowWidth(appShell().outerWidth);
  };

  appShell().addEventListener("resize", updateWindowWidth);

  // Clean up the event listener when the component unmounts
  onCleanup(() => {
    appShell().removeEventListener("resize", updateWindowWidth);
  });

  // Function to calculate grid columns based on window width

    if (windowWidth() <= breakPoint) {
      setBreakPointPosition(position);
      setGridGap("1rem")
      return
    }
  setGridGap("0rem")
  setBreakPointPosition(startPosition);
  return


}

function useResponsiveLeftBarGrid(setBreakPointPosition: Setter<BreakPointPosition | StartPosition>, setGridGap: Setter<Size>, appShell: HTMLDivElement, breakPointPosition: BreakPointPosition = BREAKPOINT_POSITION.TOP_RIGHT, breakPoint: number = 757, startPosition: StartPosition = "bar-left") {
  return useResponsiveGrid(setBreakPointPosition, setGridGap, appShell, breakPointPosition, breakPoint, startPosition)

}

function useResponsiveRightBarGrid(setBreakPointPosition: Setter<BreakPointPosition | StartPosition>, setGridGap: Setter<Size>, appShell: HTMLDivElement, breakPointPosition: BreakPointPosition = BREAKPOINT_POSITION.MAIN_TOP, breakPoint: number = 757, startPosition: StartPosition = "bar-right") {
  return useResponsiveGrid(setBreakPointPosition, setGridGap, appShell, breakPointPosition, breakPoint, startPosition)
}

function useAutoBreakPoints(autoFill:boolean=true, minColumnWidth:number=200,breakPointLayout:BreakPointLayout={} ):Accessor<string>{

  const [windowWidth, setWindowWidth] = createSignal(window.innerWidth);

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  window.addEventListener("resize", updateWindowWidth);

  // Clean up the event listener when the component unmounts
  onCleanup(() => {
    window.removeEventListener("resize", updateWindowWidth);
  });
  if(Object.keys(breakPointLayout).length===0) {
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
  }else{
    const getBreakPoints = (): string => {
      const defaultBreakPoints: { [key: number]: string } = {

      }

      for(const key in breakPointLayout){
        defaultBreakPoints[key]=`repeat(${autoFill ? 'auto-fill' : 'auto-fit'}, minmax(${breakPointLayout[key]}, 1fr));`
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
  }

}

function useresponsiveReel(setRowType: Setter<GridAutoFlow>, setColumnWidth: Setter<Size>, reelContainer: HTMLDivElement): void {
  const breakPoint = useBreakPoint();
  let switchCondition = false;
  if (typeof breakPoint !== "undefined") {
    switchCondition = true
  }
  const [windowWidth, setWindowWidth] = createSignal(reelContainer.outerWidth);
  const [windowHeight, setWindowHeight] = createSignal(reelContainer.outerWidthHeight);

  const updateWindowWidth = () => {
    setWindowWidth(reelContainer.outerWidth);
  };
    const updateWindowHeight = () => {
      setWindowHeight(reelContainer.innerHeight);
    }

  reelContainer.addEventListener("resize", updateWindowWidth);
  reelContainer.addEventListener("resize", updateWindowHeight);

  // Clean up the event listener when the component unmounts
  onCleanup(() => {
    reelContainer.removeEventListener("resize", updateWindowWidth);
    reelContainer.removeEventListener("resize", updateWindowHeight);
  });
  switch (switchCondition) {
    case  switchCondition:
      if (windowWidth() <= breakPoint) {
        setRowType("column");
        setColumnWidth("max-content");
        return;
      }
      if (windowWidth() > windowHeight()) {
        setRowType("row");
        setColumnWidth("100%");
        return;
      }
      break;

    default:
      if (windowWidth() > windowHeight()) {
        setRowType("row");
        setColumnWidth("100%");
        return;
      }
      setRowType("column");
      setColumnWidth("45%");

      break;


  }

  return;

  };


export { useResponsiveLeftBarGrid, useResponsiveRightBarGrid,useAutoBreakPoints,useresponsiveReel };
