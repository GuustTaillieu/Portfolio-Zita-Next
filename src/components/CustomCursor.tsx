"use client";
import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CURSOR_SPEED = 0.8;

type Props = {
    stickyElement: React.RefObject<any>;
};

const CustomCursor = ({ stickyElement }: Props) => {
    const [isHovering, setIsHovering] = useState(false);
    const CURSOR_SIZE = isHovering ? 60 : 20;

    const mouse = {
        x: useMotionValue(0),
        y: useMotionValue(0),
    };

    const springOptions = {
        damping: 20,
        stiffness: 300 * CURSOR_SPEED,
        mass: 0.5,
    };
    const smoothMouse = {
        x: useSpring(mouse.x, springOptions),
        y: useSpring(mouse.y, springOptions),
    };

    const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        mouse.x.set(clientX - CURSOR_SIZE / 2);
        mouse.y.set(clientY - CURSOR_SIZE / 2);
    };

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);
        stickyElement.current.addEventListener("mouseover", handleMouseOver);
        stickyElement.current.addEventListener("mouseleave", handleMouseLeave);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            stickyElement.current.removeEventListener(
                "mouseover",
                handleMouseOver,
            );
            stickyElement.current.removeEventListener(
                "mouseleave",
                handleMouseLeave,
            );
        };
    });

    return (
        <motion.div
            className="fixed aspect-square rounded-full bg-black"
            style={{
                width: CURSOR_SIZE,
                left: smoothMouse.x,
                top: smoothMouse.y,
            }}
            animate={{ width: CURSOR_SIZE }}
        />
    );
};

export default CustomCursor;
