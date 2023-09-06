import { JSXElement, ParentComponent } from "solid-js";

interface FlexibleGridProps {
  children: JSXElement | JSXElement[];
  gap?: string;
  padding?: string;
}

export const FlexibleGrid: ParentComponent<FlexibleGridProps> = function(props) {
  return (
    <>

      <div class="flexible_grid">
        {props.children}
      </div>

      <style>
        {`
          .flexible_grid {
                  display: flex;
                  flex-wrap: wrap;
                  padding: 1rem;
                  gap: 1rem;
                }

            .flexible_grid > * {
                  flex: 1;
                }
              `

        }
      </style>
    </>
  );

}
