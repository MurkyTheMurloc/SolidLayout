import { JSXElement, ParentComponent } from "solid-js";
import { Gap, Padding, Columns } from "../types/css_types";

interface GridProps {
  children: JSXElement | JSXElement[];
  gap?: Gap;
  padding?: Padding;
  columns?: Columns;
  minColumnWidth?: string;
  autoFill?: boolean;
}

function generateStyle(props: GridProps): { [key: string]: string } {
  const repeatFunction = props.autoFill ? 'auto-fill' : 'auto-fit';
  return {
    display: "grid",
    gridTemplateColumns: `repeat(${repeatFunction}, minmax(${props.minColumnWidth || "200px"}, 1fr))`, // Default to 1 column on small screens
    gap: props.gap || "1rem",
    padding: props.padding || "1rem",
  };
}

export const Grid: ParentComponent<GridProps> = function(props) {
  return (
    <>
      <div style={generateStyle(props)} class="grid">
        {props.children}
      </div>
      <style>
        {`
          @media (min-width: 480px) {
            .grid {
              grid-template-columns: repeat(${props.autoFill ? 'auto-fill' : 'auto-fit'}, minmax(${props.minColumnWidth || "200px"}, 1fr)); // 2 columns from 480px
            }
          }
          @media (min-width: 768px) {
            .grid {
              grid-template-columns: repeat(${props.autoFill ? 'auto-fill' : 'auto-fit'}, minmax(${props.minColumnWidth || "200px"}, 1fr)); // 3 columns from 768px
            }
          }
          @media (min-width: 1024px) {
            .grid {
              grid-template-columns: ${props.columns || "repeat(3, 1fr)"}; // 4 columns from 1024px
            }
          }
        `}
      </style>
    </>
  );
}