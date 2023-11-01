import React from "react";
import { MotionValue, motion } from "framer-motion";
import { sections } from "@/data";
import HomeTitle from "./HomeTitle";

type Props = {
    yPos: MotionValue<string>;
    className?: HTMLDivElement["className"];
};

function HomeTitles({ yPos, className = "" }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 0.1 } }}
            exit={{ opacity: 0, x: -100, transition: { duration: 0.2 } }}
            className={
                "fixed left-16 top-2/3 h-[3.75rem] overflow-hidden max-lg:hidden lg:h-24 xl:left-32 2xl:left-60 big:left-96 " +
                className
            }
        >
            <motion.div className="flex flex-col" style={{ translateY: yPos }}>
                {sections?.map((section) => (
                    <HomeTitle key={section.title} section={section} />
                ))}
            </motion.div>
        </motion.div>
    );
}

export default HomeTitles;
