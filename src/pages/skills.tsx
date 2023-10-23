import React from "react";
import Page from "./Page";
import { motion } from "framer-motion";
import Image from "next/image";
import BackButton from "@/components/BackButton";

type Props = {};

const Skills = (props: Props) => {
  return (
    <Page headerInverted>
      <div className="pageContainer relative">
        <motion.div
          layoutId="Skills"
          transition={{ duration: 0.5 }}
          className="fixed flex h-screen w-full items-center justify-center bg-dark"
        >
          <Image
            src="https://picsum.photos/1080/720"
            width={1080}
            height={720}
            alt="Picture of the author"
            className="h-full w-full bg-dark object-cover opacity-10 blur-sm"
          />
        </motion.div>

        <div className="flex h-full items-center pt-24">Skills</div>
        <BackButton className="bg-light text-dark" />
      </div>
    </Page>
  );
};

export default Skills;
