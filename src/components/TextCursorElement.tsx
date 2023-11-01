import React from "react";
import useCursor from "@/hooks/useCursor";

type Props = {
    children: React.ReactElement;
    text: string;
};

const TextCursorElement = ({ children, text }: Props) => {
    const { setCursorText } = useCursor();

    return React.cloneElement(children, {
        onMouseEnter: () => setCursorText(text),
        onMouseLeave: () => setCursorText(null),
    });
};

export default TextCursorElement;
