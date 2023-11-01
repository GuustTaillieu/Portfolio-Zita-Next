import React from "react";
import { CURSOR_MODES, cursorMode, cursorText } from "./states";

type Props = {
    children: React.ReactElement;
    text: string;
    mode?: CURSOR_MODES;
};

const TextCursorElement = ({ children, text, mode = "default" }: Props) => {
    return React.cloneElement(children, {
        onMouseEnter: () => {
            cursorText.value = text;
            cursorMode.value = mode;
        },
        onMouseLeave: () => {
            cursorText.value = "";
            cursorMode.value = "default";
        },
    });
};

export default TextCursorElement;
