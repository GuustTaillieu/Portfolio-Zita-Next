import HomeSection from "@/components/HomeSection";
import HomeTitle from "@/components/HomeTitle";
import Page from "@/pages/Page";
import React from "react";
import imgSrc from "@public/vercel.svg";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";

type Props = {};

function AboutMe({}: Props) {
  const router = useRouter();

  return (
    <Page>
      <div className="pageContainer">
        <div className="flex flex-row space-x-12">
          <motion.div
            layoutId="About me"
            className="relative flex aspect-[3/4] h-screen cursor-pointer items-center justify-center bg-dark"
            onClick={() => router.push("/")}
          >
            <Image
              src={imgSrc}
              alt="Picture of the author"
              className="h-full w-full object-contain blur-sm md:blur-none"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { duration: 1, delay: 0.5 },
            }}
            exit={{ opacity: 0, x: -100, transition: { duration: 0.3 } }}
            className="flex max-w-2xl flex-col justify-center space-y-8 pb-20"
          >
            <h2 className="text-4xl font-bold">About me</h2>
            <p className="text-xl">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, ex
              est. Aliquam dicta at est modi veniam voluptatibus similique
              consectetur.
            </p>
          </motion.div>
        </div>
      </div>
    </Page>
  );
}

export default AboutMe;
