import useCursor from "@/hooks/useCursor";
import React from "react";

type Props = {
    children: React.ReactNode;
};

const StickyElement = ({ children }: Props) => {
    const { addStickyElement } = useCursor();

    return (
        <div
            className="relative before:absolute before:inset-0 before:hover:scale-x-[1.5] before:hover:scale-y-[2]"
            ref={(ref) => addStickyElement(ref)}
            data-sticky="60"
        >
            {children}
        </div>
    );
};

export default StickyElement;
