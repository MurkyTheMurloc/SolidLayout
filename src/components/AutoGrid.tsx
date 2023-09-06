import { JSXElement, ParentComponent } from "solid-js";

interface AutoGridProps {
  children: JSXElement | JSXElement[];
  gap?: string;
  padding?: string;
  columns?: string;
}

export const AutoGrid: ParentComponent<AutoGridProps> = function(props) {
  return (
    <>

      <div class="auto_grid">
        {props.children}
      </div>

      <style>
        {`
          .auto_grid {
                  padding: ${props.padding || "1rem"};
                  display: grid;
                  grid-template-columns: repeat(auto-fit, minmax(10rem, "${props.columns || 1}fr"));
                  grid-gap: ${props.gap || "1rem"};
                }
            `

        }
      </style>
    </>
  );

}
