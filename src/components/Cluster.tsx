import { ParentComponent } from "solid-js";

export const Cluster: ParentComponent = function(props) {
  return (
    <>

      <div class="cluster">
        {props.children}
      </div>

      <style>
        {`
          .cluster {
                  display: flex;
                  flex-wrap: wrap;
                  padding: 1rem;
                  gap: 1rem;
                }
              `}
      </style>
    </>
  );

}
