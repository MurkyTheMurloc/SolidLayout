
import {Accessor, createSignal, onCleanup, Setter} from "solid-js";
import { BreakPointPosition,StartPosition } from "../types/gridPosition";
import {BreakPointLayout} from "../types/break_point_layout";
import {BREAKPOINT_POSITION} from "../enums/break_point_enum";
import {GridAutoFlow, Size} from "../types/css_types";



function useResponsiveGrid(
    setBreakPointPosition:Setter<BreakPointPosition|StartPosition>,
  setGridGap:Setter<Size>,
  position: BreakPointPosition,
  breakPoint: number,
  startPosition: StartPosition
):void {
  const [windowWidth, setWindowWidth] = createSignal(window.innerWidth);

  const updateWindowWidth = () => {
    setWindowWidth(window.outerWidth);
  };

  window.addEventListener("resize", updateWindowWidth);

  // Clean up the event listener when the component unmounts
  onCleanup(() => {
    window.removeEventListener("resize", updateWindowWidth);
  });

  // Function to calculate grid columns based on window width

    if (windowWidth() <= breakPoint) {
      setBreakPointPosition(position);
      setGridGap("1rem")
      return
    }

    setBreakPointPosition(startPosition);
    return


}

function useResponsiveLeftBarGrid(setBreakPointPosition:Setter<BreakPointPosition|StartPosition>,setGridGap:Setter<Size>,breakPointPosition:BreakPointPosition=BREAKPOINT_POSITION.TOP_RIGHT,breakPoint:number=757, startPosition:StartPosition="bar-left"){
    return useResponsiveGrid(setBreakPointPosition,setGridGap,breakPointPosition, breakPoint,startPosition)

}

function useResponsiveRightBarGrid(setBreakPointPosition:Setter<BreakPointPosition|StartPosition>,setGridGap:Setter<Size>, breakPointPosition:BreakPointPosition=BREAKPOINT_POSITION.MAIN_TOP,breakPoint:number=757, startPosition:StartPosition="bar-right"){
  return useResponsiveGrid(setBreakPointPosition,setGridGap,breakPointPosition, breakPoint,startPosition)
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

function useresponsiveReel(setRowType:Setter<GridAutoFlow>, setColumnWidth:Setter<Size>): void {
  const [windowWidth, setWindowWidth] = createSignal(window.innerWidth);
  const [windowHeight, setWindowHeight] = createSignal(window.innerHeight);

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };
    const updateWindowHeight = () => {
    setWindowHeight(window.innerHeight);
    }

  window.addEventListener("resize", updateWindowWidth);
    window.addEventListener("resize", updateWindowHeight);

  // Clean up the event listener when the component unmounts
  onCleanup(() => {
    window.removeEventListener("resize", updateWindowWidth);
        window.removeEventListener("resize", updateWindowHeight);
  });
    console.log(windowWidth(),windowHeight())
    if(windowWidth()>windowHeight()){
      setRowType("row");
      setColumnWidth("100%");
      return;
    }

  console.log("after",windowWidth(),windowHeight())
      setRowType("column");
      setColumnWidth("45%");
      return;

  };


export { useResponsiveLeftBarGrid, useResponsiveRightBarGrid,useAutoBreakPoints,useresponsiveReel };
