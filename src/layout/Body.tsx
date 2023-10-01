import type {ParentComponent} from "solid-js";
import "../styles/body.css";

export const Body: ParentComponent = function (props) {
    return (
        <div>
            {props.children}
        </div>
    );
}