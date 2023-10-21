import React from "react";
import Page from "./Page";
import { motion } from "framer-motion";
import Image from "next/image";
import imgSrc from "@public/vercel.svg";
import { useRouter } from "next/router";

type Props = {};

function experience({}: Props) {
  const router = useRouter();

  return (
    <Page>
      <div className="pageContainer">
        <div className="flex flex-row space-x-12">
          <motion.div
            layoutId="Experience"
            className="relative flex aspect-[3/4] h-screen items-center justify-center bg-dark"
            onClick={() => router.push("/")}
          >
            <Image
              src={imgSrc}
              alt="Picture of the author"
              className="h-full w-full object-contain blur-sm md:blur-none"
            />
          </motion.div>

          <div className="flex max-w-2xl flex-col justify-center space-y-8 pb-20">
            <h2 className="text-4xl font-bold">Experience</h2>
            <p className="text-xl">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, ex
              est. Aliquam dicta at est modi veniam voluptatibus similique
              consectetur.
            </p>
          </div>
        </div>
      </div>
    </Page>
  );
}

export default experience;
