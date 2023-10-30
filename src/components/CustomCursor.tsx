"use client";
import React, { useEffect, useMemo, useState } from "react";
import {
    animate,
    motion,
    transform,
    useMotionValue,
    useMotionValueEvent,
    useSpring,
} from "framer-motion";
import useCursor from "@/hooks/useCursor";

const DEFAULT_CURSOR_SIZE = 10;
const CURSOR_SPEED = 0.8;
const STICKY_DISTANCE = 0.2;
const MAX_STRETCH_FACTOR = 1.1;

type Props = {};

const CustomCursor = ({}: Props) => {
    const { stickyElements, cursorText } = useCursor();
    const cursorRef = React.useRef<HTMLDivElement>(null);
    const [cursorSize, setCursorSize] = useState(DEFAULT_CURSOR_SIZE);

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

        const elementHovering = stickyElements.current?.find((el) =>
            el.classList.contains("stick"),
        );
        if (elementHovering) {
            const { top, left, width, height } =
                elementHovering.getBoundingClientRect();
            const center = { x: left + width / 2, y: top + height / 2 };
            const distance = { x: clientX - center.x, y: clientY - center.y };
            const size = parseInt(elementHovering.dataset.sticky!) || 60;

            // ROTATION
            rotate(distance);

            mouse.x.set(center.x - size / 2 + distance.x * STICKY_DISTANCE);
            mouse.y.set(center.y - size / 2 + distance.y * STICKY_DISTANCE);
            // STRETCH
            const absoluteDistance = Math.max(
                Math.abs(distance.x),
                Math.abs(distance.y),
            );
            const nexScaleX = transform(
                absoluteDistance,
                [0, width],
                [1, MAX_STRETCH_FACTOR],
            );
            const nexScaleY = transform(
                absoluteDistance,
                [0, height],
                [1, MAX_STRETCH_FACTOR * 0.7],
            );
            scale.x.set(nexScaleX);
            scale.y.set(nexScaleY);
        } else {
            mouse.x.set(clientX - cursorSize / 2);
            mouse.y.set(clientY - cursorSize / 2);
        }
    };

    const handleMouseOver = (e: MouseEvent, element: HTMLElement) => {
        element.classList.add("stick");
        element.dataset.sticky
            ? setCursorSize(+element.dataset.sticky)
            : setCursorSize(60);
    };

    const handleMouseLeave = (e: MouseEvent, element: HTMLElement) => {
        element.classList.remove("stick");
        setCursorSize(DEFAULT_CURSOR_SIZE);
        animate(
            cursorRef.current!,
            { scaleX: 1, scaleY: 1 },
            { duration: 0.1, type: "spring" },
        );
    };

    const handleMouseOutScreen = () => {
        animate(
            cursorRef.current!,
            { scaleX: 0, scaleY: 0 },
            { duration: 0.3 },
        );
    };

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);
        stickyElements.current?.forEach((el) => {
            el.addEventListener("mouseover", (e) => handleMouseOver(e, el));
            el.addEventListener("mouseleave", (e) => handleMouseLeave(e, el));
        });
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseleave", handleMouseOutScreen);
            stickyElements.current?.forEach((el) => {
                el.removeEventListener("mouseover", (e) =>
                    handleMouseOver(e, el),
                );
                el.removeEventListener("mouseleave", (e) =>
                    handleMouseLeave(e, el),
                );
            });
        };
    }, [stickyElements]);

    type templateProps = {
        rotate: string;
        scaleX: number;
        scaleY: number;
    };
    const template = ({ rotate, scaleX, scaleY }: templateProps) =>
        `rotate(${rotate}) scaleX(${scaleX}) scaleY(${scaleY})`;
    const textTemplate = () => `rotate(0deg) scaleX(1) scaleY(1)`;

    return (
        <>
            {cursorText ? (
                <motion.div
                    transformTemplate={textTemplate}
                    className="pointer-events-none fixed flex aspect-square !-translate-x-1/2 !-translate-y-1/2 items-center justify-center overflow-hidden rounded-full bg-dark text-white mix-blend-difference transition-transform"
                    ref={cursorRef}
                    style={{
                        width: cursorSize,
                        left: smoothMouse.x,
                        top: smoothMouse.y,
                        scaleX: scale.x,
                        scaleY: scale.y,
                    }}
                    animate={{ width: 100 }}
                >
                    <motion.span
                        className="text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{
                            duration: 0.5,
                            ease: "easeInOut",
                        }}
                    >
                        {cursorText}
                    </motion.span>
                </motion.div>
            ) : (
                <motion.div
                    transformTemplate={template}
                    className="pointer-events-none fixed aspect-square rounded-full bg-dark transition-transform"
                    ref={cursorRef}
                    style={{
                        width: cursorSize,
                        left: smoothMouse.x,
                        top: smoothMouse.y,
                        scaleX: scale.x,
                        scaleY: scale.y,
                    }}
                    animate={{ width: cursorSize }}
                />
            )}
        </>
    );
};

export default CustomCursor;
