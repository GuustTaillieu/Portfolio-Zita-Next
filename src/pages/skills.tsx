import React from "react";
import Page from "./Page";
import { motion } from "framer-motion";
import Image from "next/image";
import BackButton from "@/components/BackButton";
import { info, skills } from "@/data";
import Skill from "@/components/Skill";
import { useRouter } from "next/router";

type Props = {};

const Skills = (props: Props) => {
  const router = useRouter();

  return (
    <Page headerInverted>
      <div className="pageContainer relative">
        <motion.div
          layoutId="Skills"
          transition={{ duration: 0.5 }}
          className="fixed flex h-screen w-full items-center justify-center bg-dark"
        >
          <Image
            src={info.backgroundImage}
            width={1080}
            height={720}
            alt="Picture of the author"
            className="h-full w-full bg-dark object-cover opacity-5 blur-md"
          />
        </motion.div>

        <div className="mx-auto flex h-full max-w-4xl flex-col items-center pt-24 text-center text-light">
          <h2 className="sectionTitle z-50 mb-10 md:mb-4">Skills</h2>
          <h3 className="mb-8 hidden font-secondary text-2xl uppercase tracking-[10px] opacity-40 md:flex">
            Hover to see more
          </h3>
          <div className="grid grid-cols-2 gap-8 py-8 sm:grid-cols-3 md:grid-cols-4">
            {skills.map((skill, index) => (
              <Skill
                key={index}
                data={skill}
                direction={
                  index >= Math.floor(skills.length / 2) ? "right" : "left"
                }
              />
            ))}
          </div>
        </div>
        <BackButton
          className="bg-light text-dark"
          callback={() => router.push("/?section=skills")}
        />
      </div>
    </Page>
  );
};

export default Skills;
