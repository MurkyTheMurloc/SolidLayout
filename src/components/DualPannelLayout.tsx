
import { JSXElement, ParentComponent } from "solid-js";

interface DualPannelProps {
  children: JSXElement | JSXElement[];
  gap?: string;

}

export const DualPannel: ParentComponent<DualPannelProps> = function(props) {
  return (
    <>

      <div class="dual_pannel">
        {props.children}
      </div>

      <style>
        {`
          .dual_pannel {
                  display: flex;
                  flex-wrap: wrap;
                  align-items: start;
                  gap: 1rem;
                  margin-inline: auto;
                }

            .dual_pannel > :first-child {
                  flex-basis: 500px;
                  flex-grow: 9999;
                }
                .dual_pannel > :last-child {
                  flex-basis: 300px;
                  flex-grow: 1;
                }
              `

        }
      </style>
    </>
  );

}
