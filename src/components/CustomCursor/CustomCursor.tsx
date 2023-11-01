"use client";
import React, { useEffect } from "react";
import {
    animate,
    motion,
    transform,
    useMotionValue,
    useSpring,
} from "framer-motion";
import useCursor from "@/hooks/useCursor";
import {
    CURSOR_SPEED,
    DEFAULT_CURSOR_SIZE,
    MAX_STRETCH_FACTOR,
    STICKY_DISTANCE,
    cursorMode,
    cursorSize,
    cursorText,
} from "./states";
import { computed } from "@preact/signals-react";
type Props = {};

const CustomCursor = ({}: Props) => {
    const { stickyElements } = useCursor();
    const cursorRef = React.useRef<HTMLDivElement>(null);

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
            mouse.x.set(clientX - cursorSize.value / 2);
            mouse.y.set(clientY - cursorSize.value / 2);
        }
    };

    const handleMouseOver = (e: MouseEvent, element: HTMLElement) => {
        element.classList.add("stick");
        const stickySize = element.dataset.sticky
            ? +element.dataset.sticky
            : 60;
        cursorSize.value = stickySize;
    };

    const handleMouseLeave = (e: MouseEvent, element: HTMLElement) => {
        element.classList.remove("stick");
        cursorSize.value = DEFAULT_CURSOR_SIZE;
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

    const mode = computed(() => {
        switch (cursorMode.value) {
            case "default":
                return " mix-blend-difference";
            case "solid":
                return " mix-blend-normal";
            case "opaque":
                return " mix-blend-exclusion";
        }
    });

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
            {cursorText.value ? (
                <motion.div
                    transformTemplate={textTemplate}
                    className={
                        "pointer-events-none fixed flex aspect-square !-translate-x-1/2 !-translate-y-1/2 items-center justify-center overflow-hidden rounded-full bg-white text-dark transition" +
                        mode.value
                    }
                    ref={cursorRef}
                    style={{
                        width: cursorSize.value,
                        left: smoothMouse.x,
                        top: smoothMouse.y,
                        scaleX: scale.x,
                        scaleY: scale.y,
                    }}
                    animate={{ width: 100 }}
                >
                    <motion.span
                        className="text-center text-xl font-bold uppercase"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{
                            duration: 0.5,
                            ease: "easeInOut",
                        }}
                    >
                        {cursorText.value.split("").map((letter, index) => (
                            <motion.span
                                key={index}
                                className="inline-block"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{
                                    duration: 0.5,
                                    ease: "easeInOut",
                                    delay: index * 0.05,
                                }}
                            >
                                {letter === " " ? "\u00A0" : letter}
                            </motion.span>
                        ))}
                    </motion.span>
                </motion.div>
            ) : (
                <motion.div
                    transformTemplate={template}
                    className={
                        "pointer-events-none fixed aspect-square rounded-full bg-white transition" +
                        mode.value
                    }
                    ref={cursorRef}
                    style={{
                        width: cursorSize.value,
                        left: smoothMouse.x,
                        top: smoothMouse.y,
                        scaleX: scale.x,
                        scaleY: scale.y,
                    }}
                    animate={{ width: cursorSize.value }}
                />
            )}
        </>
    );
};

export default CustomCursor;
