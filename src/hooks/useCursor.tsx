import React from "react";

const Context = React.createContext({
    addStickyElement: (ref: HTMLElement | null) => {},
    stickyElements: React.createRef<HTMLElement[]>(),
});

type Props = {
    children: React.ReactNode;
};

export const CursorContext = ({ children }: Props) => {
    const stickyElements = React.useRef<HTMLElement[]>([]);

    const addStickyElement = (ref: HTMLElement | null) => {
        if (ref) {
            stickyElements.current.push(ref);
        }
    };

    const contextProps = React.useMemo(
        () => ({
            stickyElements,
            addStickyElement,
        }),
        [stickyElements],
    );

    return <Context.Provider value={contextProps}>{children}</Context.Provider>;
};

const useCursor = () => {
    return React.useContext(Context);
};

export default useCursor;
