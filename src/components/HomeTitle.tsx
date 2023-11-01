import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { SectionType } from "../../types";
import TextCursorElement from "./CustomCursor/TextCursorElement";

type Props = {
    section: SectionType;
};

const HomeTitle = ({ section }: Props) => {
    return (
        <TextCursorElement text="Click me!">
            <Link
                href={section.link_url}
                scroll={false}
                className="h-[3.75rem] text-6xl uppercase lg:h-24 lg:text-8xl"
            >
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ amount: 0.2 }}
                    transition={{ duration: 1 }}
                >
                    {section.title}
                </motion.h2>
            </Link>
        </TextCursorElement>
    );
};

export default HomeTitle;
