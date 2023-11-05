import Image, { StaticImageData } from "next/image";
import React from "react";
import { motion } from "framer-motion";

type Props = {
    data: {
        logo: StaticImageData;
        percentage: number;
    };
    direction: "left" | "right";
};

const Skill = ({ data, direction }: Props) => {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <motion.div
            initial={
                direction === "left"
                    ? { x: -100, opacity: 0 }
                    : { x: 100, opacity: 0 }
            }
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative flex w-32 items-end overflow-hidden rounded-full shadow-lg shadow-black/40 sm:w-40"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div>
                <Image
                    src={data.logo}
                    width={200}
                    height={200}
                    alt="Picture of the author"
                    className="aspect-square w-full"
                />
            </div>
            <motion.h3
                initial={{ opacity: 0 }}
                animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-center bg-dark/70 font-default text-5xl font-bold max-md:!opacity-100"
            >
                <motion.span
                    className="max-md:!translate-y-0"
                    initial={{ y: -10 }}
                    animate={isHovered ? { y: 0 } : { y: -10 }}
                    transition={{
                        duration: 0.3,
                        delay: 0.1,
                        ease: "easeInOut",
                    }}
                >
                    {data.percentage} %
                </motion.span>
            </motion.h3>
        </motion.div>
    );
};

export default Skill;
