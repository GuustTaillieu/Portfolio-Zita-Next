import React from "react";
import { CURSOR_MODES, cursorMode } from "./states";

type Props = {
    children: React.ReactElement;
    text: string;
    mode?: CURSOR_MODES;
};

const CursorStyle = ({ children, mode = "default" }: Props) => {
    return React.cloneElement(children, {
        onMouseEnter: () => (cursorMode.value = mode),
        onMouseLeave: () => (cursorMode.value = "default"),
    });
};

export default CursorStyle;
