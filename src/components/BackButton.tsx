import React, { HTMLAttributes } from "react";
import { motion } from "framer-motion";
import { TbArrowBackUp } from "react-icons/tb";
import StickyElement from "./StickyElement";
import Magnetic from "./CustomCursor/Magnetic";
import { useRouter } from "next/router";
import { cursorMode, cursorText } from "./CustomCursor/states";

type Props = {
    callback?: () => void;
    className?: HTMLAttributes<HTMLButtonElement>["className"];
};

const BackButton = ({ callback, className }: Props) => {
    const router = useRouter();

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="absolute left-4 top-16 m-3 aspect-square overflow-hidden rounded-full md:left-20"
        >
            <StickyElement>
                <button
                    onClick={() =>
                        callback
                            ? callback()
                            : () => {
                                  cursorMode.value = "default";
                                  cursorText.value = "";
                                  router.back();
                              }
                    }
                    className={
                        className
                            ? className +
                              " p-2 opacity-40 transition-all hover:bg-primary hover:opacity-100"
                            : "bg-dark p-2 text-dark opacity-40 transition-opacity hover:opacity-100"
                    }
                >
                    <Magnetic strength={0.2}>
                        <TbArrowBackUp className="h-6 w-6" />
                    </Magnetic>
                </button>
            </StickyElement>
        </motion.div>
    );
};

export default BackButton;
