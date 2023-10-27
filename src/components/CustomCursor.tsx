"use client";
import React, { useEffect, useState } from "react";
import {
    animate,
    motion,
    transform,
    useMotionValue,
    useSpring,
} from "framer-motion";

const CURSOR_SPEED = 0.8;
const STICKY_DISTANCE = 0.2;
const MAX_STRETCH_FACTOR = 1.3;

type Props = {
    stickyElement: React.RefObject<any>;
};

const CustomCursor = ({ stickyElement }: Props) => {
    const cursorRef = React.useRef<HTMLDivElement>(null);
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
    const scale = {
        x: useMotionValue(1),
        y: useMotionValue(1),
    };

    const rotate = (distance: { x: number; y: number }) => {
        const angle = Math.atan2(distance.y, distance.x);
        animate(cursorRef.current!, { rotate: `${angle}rad` }, { duration: 0 });
    };

    const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const { top, left, width, height } =
            stickyElement.current.getBoundingClientRect();
        const center = { x: left + width / 2, y: top + height / 2 };
        const distance = { x: clientX - center.x, y: clientY - center.y };

        if (isHovering) {
            // ROTATION
            rotate(distance);

            mouse.x.set(
                center.x - CURSOR_SIZE / 2 + distance.x * STICKY_DISTANCE,
            );
            mouse.y.set(
                center.y - CURSOR_SIZE / 2 + distance.y * STICKY_DISTANCE,
            );
            // STRETCH
            const absoluteDistance = Math.max(
                Math.abs(distance.x),
                Math.abs(distance.y),
            );
            const nexScaleX = transform(
                absoluteDistance,
                [0, width / 2],
                [1, MAX_STRETCH_FACTOR],
            );
            const nexScaleY = transform(
                absoluteDistance,
                [0, height / 2],
                [1, MAX_STRETCH_FACTOR * 0.7],
            );
            scale.x.set(nexScaleX);
            scale.y.set(nexScaleY);
        } else {
            mouse.x.set(clientX - CURSOR_SIZE / 2);
            mouse.y.set(clientY - CURSOR_SIZE / 2);
        }
    };

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
        animate(
            cursorRef.current!,
            { scaleX: 1, scaleY: 1 },
            { duration: 0.1, type: "spring" },
        );
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

    type templateProps = {
        rotate: string;
        scaleX: number;
        scaleY: number;
    };
    const template = ({ rotate, scaleX, scaleY }: templateProps) =>
        `rotate(${rotate}) scaleX(${scaleX}) scaleY(${scaleY})`;

    return (
        <motion.div
            transformTemplate={template}
            className="fixed aspect-square rounded-full bg-black"
            ref={cursorRef}
            style={{
                width: CURSOR_SIZE,
                left: smoothMouse.x,
                top: smoothMouse.y,
                scaleX: scale.x,
                scaleY: scale.y,
            }}
            animate={{ width: CURSOR_SIZE }}
        />
    );
};

export default CustomCursor;
