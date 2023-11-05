import useCursor from "@/hooks/useCursor";
import React from "react";
import Magnetic from "./CustomCursor/Magnetic";

type Props = {
    children: React.ReactNode;
    cursorSize?: number;
    magnetic?:
        | {
              strength?: number;
          }
        | false;
    className?: React.HTMLAttributes<HTMLDivElement>["className"];
};

const StickyElement = ({
    children,
    cursorSize = 60,
    magnetic = false,
    className = "",
}: Props) => {
    const { addStickyElement } = useCursor();

    return (
        <div
            className={
                "relative before:absolute before:inset-0 before:hover:scale-x-[1.5] before:hover:scale-y-[2] " +
                className
            }
            ref={(ref) => addStickyElement(ref)}
            data-sticky={cursorSize.toString()}
        >
            {magnetic ? (
                <Magnetic {...magnetic}>{children}</Magnetic>
            ) : (
                children
            )}
        </div>
    );
};

export default StickyElement;
