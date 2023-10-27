import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

type Props = {
    children: React.ReactNode;
};

const Magnetic = ({ children }: Props) => {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
        const { clientX, clientY } = e;
        const { top, left, width, height } =
            ref.current!.getBoundingClientRect();
        const center = {
            x: clientX - (left + width / 2),
            y: clientY - (top + height / 2),
        };
        setPosition({ x: center.x * 0.05, y: center.y * 0.05 });
    };

    const handleMouseLeave: React.MouseEventHandler<HTMLDivElement> = () => {
        setPosition({ x: 0, y: 0 });
    };

    const { x, y } = position;
    return (
        <motion.div
            className="relative"
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x, y }}
            transition={{
                type: "spring",
                stiffness: 200,
                damping: 5,
                mass: 0.5,
            }}
        >
            {children}
        </motion.div>
    );
};

export default Magnetic;
