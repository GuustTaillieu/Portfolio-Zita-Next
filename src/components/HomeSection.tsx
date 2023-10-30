import React from "react";
import Image from "next/image";
import imgSrc from "@public/vercel.svg";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionType } from "../../types";
import { useRouter } from "next/router";
import TextCursorElement from "./TextCursorElement";

type Props = {
    container: React.MutableRefObject<null>;
    section: SectionType;
};

function HomeSection({ container, section }: Props) {
    const router = useRouter();
    const target = React.useRef(null);
    const { scrollYProgress } = useScroll({
        container,
        target,
        offset: ["-100%", "100%"],
    });

    const rotate = useTransform(scrollYProgress, [0, 1], [5, -10]);

    return (
        <section
            key={section.title}
            id={section.title.toId()}
            className="relative flex h-[70vh] snap-center items-center justify-center md:pr-16 lg:h-[80vh] lg:justify-end xl:pr-32 2xl:pr-60 big:pr-96"
        >
            <TextCursorElement text="Click to see more">
                <motion.div
                    layoutId={section.title}
                    ref={target}
                    className="relative flex aspect-[3/4] h-4/5 cursor-pointer items-center justify-center bg-dark lg:h-3/4"
                    style={{ rotate }}
                    onClick={() => router.push(section.link_url)}
                >
                    <Image
                        src={imgSrc}
                        alt="Picture of the author"
                        className="h-full w-full object-contain blur-sm lg:blur-none"
                    />
                    <div className="absolute inset-0 bg-dark opacity-30 lg:hidden"></div>
                    <h2 className="absolute left-1/2 top-1/2 flex -translate-x-1/2 text-3xl text-light lg:hidden">
                        {section.title}
                    </h2>
                </motion.div>
            </TextCursorElement>
        </section>
    );
}

export default HomeSection;
