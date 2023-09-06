import { JSXElement, ParentComponent } from "solid-js";

interface CenterProps {
  children: JSXElement | JSXElement[];
}

function generateStyle(): { [key: string]: string } {
  return {
    display: "flex",
    "justify-content": "center",
    "align-items": "center",
    "text-align": "center",
  };
}

export const Center: ParentComponent<CenterProps> = function(props) {
  return (
    <div style={generateStyle()} class="center">
      {props.children}
    </div>
  );
}