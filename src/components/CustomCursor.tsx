import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CURSOR_SIZE = 20;
const CURSOR_SPEED = 0.8;

type Props = {};

const CustomCursor = (props: Props) => {
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

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  });

  return (
    <motion.div
      className="fixed aspect-square rounded-full bg-black"
      style={{
        width: CURSOR_SIZE,
        left: smoothMouse.x,
        top: smoothMouse.y,
      }}
    />
  );
};

export default CustomCursor;
