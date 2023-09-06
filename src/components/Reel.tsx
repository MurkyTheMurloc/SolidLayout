import { JSXElement, ParentComponent } from "solid-js";

interface ReelGridProps {
  children: JSXElement | JSXElement[];
  gap?: string;
  padding?: string;
  scrollPadding?: string;
  scrollSnapType?: string;
  scrollBehavior?: string;
}

export const ReelGrid: ParentComponent<ReelGridProps> = function(props) {
  return (
    <>

      <div class="reel_grid">
        {props.children}
      </div>

      <style>
        {`
          .reel_grid {
                  display: grid;
                  grid-auto-flow: column;
                  grit-auto-columns: 45%;
                  overflow-x: scroll;
                  scroll-snap-type: ${props.scrollSnapType || "x mandatory"};
                  scroll-behavior: ${props.scrollBehavior || "smooth"};
                  scroll-padding: ${props.scrollPadding || "1rem"};
                  padding: ${props.padding || "1rem"};
                  gap: ${props.gap || "1rem"};
                }
              `
        }
      </style>
    </>
  );

}
