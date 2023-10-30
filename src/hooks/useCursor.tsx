import React from "react";

const Context = React.createContext({
    cursorText: "" as string | null,
    setCursorText: (text: string | null) => {},
    addStickyElement: (ref: HTMLElement | null) => {},
    stickyElements: React.createRef<HTMLElement[]>(),
});

type Props = {
    children: React.ReactNode;
};

export const CursorContext = ({ children }: Props) => {
    const [cursorText, setCursorText] = React.useState<string | null>(null);
    const stickyElements = React.useRef<HTMLElement[]>([]);

    const addStickyElement = (ref: HTMLElement | null) => {
        if (ref) {
            stickyElements.current.push(ref);
        }
    };

    const contextProps = React.useMemo(
        () => ({
            cursorText,
            setCursorText,
            stickyElements,
            addStickyElement,
        }),
        [stickyElements, cursorText],
    );

    return <Context.Provider value={contextProps}>{children}</Context.Provider>;
};

const useCursor = () => {
    return React.useContext(Context);
};

export default useCursor;
