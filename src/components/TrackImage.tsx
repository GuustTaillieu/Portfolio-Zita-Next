import Image, { StaticImageData } from "next/image";
import React from "react";
import { motion } from "framer-motion";
import ROUTES from "@/routes";
import { projectImageVariant } from "@/pages/projects";
import TextCursorElement from "./CustomCursor/TextCursorElement";
import { cursorMode, cursorText } from "./CustomCursor/states";
import { useRouter } from "next/router";

type Props = {
    project: {
        id: string;
        title: string;
        description: string;
        image: StaticImageData;
    };
};

const TrackImage = ({ project }: Props) => {
    const router = useRouter();

    return (
        <TextCursorElement text="Discover" mode="solid">
            <motion.div
                key={project.id}
                className="z-50 aspect-[5/3] snap-center rounded-md bg-gray-400 shadow-lg md:aspect-[3/4] md:h-full"
                layoutId={project.title}
                onClick={() => {
                    cursorText.value = "";
                    cursorMode.value = "default";
                    router.push(ROUTES.PROJECT(project.id));
                }}
                variants={projectImageVariant}
                transition={{ duration: 0.5 }}
            >
                <Image
                    draggable={false}
                    src={project.image}
                    width={100}
                    height={200}
                    alt="Project image"
                    className="h-full w-full object-cover"
                />
            </motion.div>
        </TextCursorElement>
    );
};

export default TrackImage;
