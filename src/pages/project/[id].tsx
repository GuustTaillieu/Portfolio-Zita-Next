"use client";

import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { Variants, motion, useScroll, useTransform } from "framer-motion";
import ROUTES from "@/routes";
import BackButton from "@/components/BackButton";
import Page from "../Page";
import { projects } from "@/data";

const variants: Variants = {
  initial: { marginRight: 100, scale: 3, originX: "100%" },
  animate: {
    marginRight: 0,
    scale: 1,
    transition: { duration: 0.5, delayChildren: 0, staggerChildren: 0.1 },
  },
};

type Props = {
  project: {
    id: string;
    title: string;
    description: string;
    image: string;
  };
};

export default function Project({ project }: Props) {
  const router = useRouter();

  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <Page headerInverted>
      <div className="overflow-x-hidden bg-dark">
        <motion.div
          layoutId={project?.title}
          key={project?.id}
          transition={{ duration: 0.5 }}
          className="relative h-screen w-full bg-gray-400"
        >
          <Image
            draggable={false}
            src={project?.image ?? ""}
            width={1920}
            height={1080}
            alt="Picture of the author"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center"
            style={{ opacity }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-4/5 text-center font-secondary text-4xl uppercase tracking-[10px] text-light md:w-fit"
            >
              {project?.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="w-4/5 text-center font-secondary text-xl uppercase tracking-[10px] text-light md:w-fit"
            >
              {project?.description}
            </motion.p>
          </motion.div>

          <motion.div
            variants={variants}
            initial="initial"
            animate="animate"
            className="absolute bottom-4 left-0 right-0 flex h-8 flex-row-reverse justify-center gap-4 overflow-x-auto md:left-auto md:right-4 md:h-16 md:justify-end"
          >
            {projects
              .filter((p) => p.id !== project.id)
              .reverse()
              .map((project, i) => (
                <motion.div
                  className="aspect-[4/2] rounded-sm md:overflow-auto"
                  layoutId={project.title}
                  key={project.id}
                  variants={variants}
                  style={{ opacity }}
                  onClick={() => router.push(ROUTES.PROJECT(project.id))}
                >
                  <Image
                    draggable={false}
                    src={project.image}
                    width={1920}
                    height={1080}
                    alt="Picture of the author"
                    className="h-full w-full object-cover opacity-40 transition-opacity hover:opacity-100"
                  />
                </motion.div>
              ))}
          </motion.div>
          <BackButton
            className="bg-light text-dark"
            callback={() => router.push(ROUTES.PROJECTS)}
          />
        </motion.div>
        <div className="h-screen"></div>
      </div>
    </Page>
  );
}

export async function getStaticPaths() {
  return {
    paths: projects.map((project) => ({
      params: { id: project.id },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id);
  return {
    props: { project },
  };
}
