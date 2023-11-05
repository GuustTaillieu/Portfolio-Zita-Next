"use client";
import React, { useEffect } from "react";
import Page from "./Page";
import { motion } from "framer-motion";
import TrackImage from "@/components/TrackImage";
import { info, projects } from "@/data";
import BackButton from "@/components/BackButton";
import Image from "next/image";
import { useRouter } from "next/router";
import { cursorMode, cursorText } from "@/components/CustomCursor/states";

export const projectImageVariant = {
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        transition: { duration: 0.5, staggerChildren: 0.1, delayChildren: 0.5 },
    },
};

type Props = {};

const Projects = ({}: Props) => {
    const router = useRouter();

    return (
        <Page headerInverted={true}>
            <div
                data-scroll-container
                className="relative flex h-screen w-screen flex-col items-center justify-start overflow-y-scroll bg-dark pt-24 font-default text-light md:justify-center md:overflow-hidden md:pt-0"
            >
                <motion.div
                    layoutId="Projects"
                    transition={{ duration: 0.5 }}
                    className="fixed flex h-screen w-full items-center justify-center bg-dark"
                >
                    <Image
                        src={info.backgroundImage}
                        width={1080}
                        height={720}
                        alt="Picture of the author"
                        className="h-full w-full bg-dark object-cover opacity-5 blur-sm"
                    />
                </motion.div>

                <h2 className="sectionTitle z-50 mb-10 md:mb-4">Projects</h2>
                <h3 className="mb-8 hidden font-secondary text-2xl uppercase tracking-[10px] text-primary opacity-40 md:flex">
                    Click to view
                </h3>

                <motion.div
                    className="relative mb-8 flex h-1/2 w-3/4 snap-x snap-mandatory flex-col space-y-8 overflow-hidden overflow-x-scroll pb-4 md:mb-0 md:flex-row md:space-x-8 md:space-y-0"
                    variants={projectImageVariant}
                    initial="initial"
                    animate="animate"
                >
                    {projects.map((project, i) => (
                        <TrackImage key={project.id} project={project} />
                    ))}
                </motion.div>
            </div>
            <BackButton
                className="bg-primaryDark text-dark"
                callback={() => {
                    cursorText.value = "";
                    cursorMode.value = "default";
                    router.push("/", "/#projects");
                }}
            />
        </Page>
    );
};

export default Projects;
