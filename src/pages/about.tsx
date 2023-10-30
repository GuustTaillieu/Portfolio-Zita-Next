import Page from "@/pages/Page";
import React from "react";
import imgSrc from "@public/vercel.svg";
import { motion } from "framer-motion";
import Image from "next/image";
import ROUTES from "@/routes";
import { useRouter } from "next/router";
import TextCursorElement from "@/components/TextCursorElement";

type Props = {};

function AboutMe({}: Props) {
    const router = useRouter();

    return (
        <Page>
            <div className="pageContainer">
                <div className="flex flex-row max-lg:h-full max-lg:items-center max-lg:justify-center max-lg:px-10 lg:space-x-12 big:space-x-40">
                    <TextCursorElement text="Go back">
                        <motion.div
                            layoutId="About me"
                            className="relative flex h-screen cursor-pointer items-center justify-center bg-dark max-2xl:max-w-[30rem] max-lg:hidden xl:aspect-[3/4]"
                            onClick={() => router.push(ROUTES.HOME, "/#about")}
                        >
                            <Image
                                src={imgSrc}
                                alt="Picture of the author"
                                className="h-full w-full object-contain blur-sm md:blur-none"
                            />
                        </motion.div>
                    </TextCursorElement>

                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        animate={{
                            opacity: 1,
                            x: 0,
                            transition: { duration: 1, delay: 0.5 },
                        }}
                        exit={{
                            opacity: 0,
                            x: -100,
                            transition: { duration: 0.3 },
                        }}
                        className="flex max-w-2xl flex-col justify-center space-y-8 pb-20"
                    >
                        <motion.div
                            className="relative mx-auto aspect-[4/3] w-60 overflow-hidden rounded-lg md:w-80 lg:hidden"
                            onClick={() => router.push(ROUTES.HOME, "/#about")}
                        >
                            <Image
                                src={imgSrc}
                                alt="Picture of the author"
                                className="h-full w-full bg-dark object-contain"
                            />
                        </motion.div>
                        <h2 className="sectionTitle max-lg:text-center">
                            About me
                        </h2>
                        <p className="text-2xl max-lg:text-center">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. At, ex est. Aliquam dicta at est modi veniam
                            voluptatibus similique consectetur.
                        </p>
                    </motion.div>
                </div>
            </div>
        </Page>
    );
}

export default AboutMe;
