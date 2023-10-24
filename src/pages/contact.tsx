import React from "react";
import Page from "./Page";
import { motion } from "framer-motion";
import Image from "next/image";
import ROUTES from "@/routes";
import imgSrc from "@public/vercel.svg";
import { useRouter } from "next/router";

type Inputs = {
  from_name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

function Contact({}: Props) {
  const router = useRouter();

  return (
    <Page>
      <div className="pageContainer">
        <div className="flex flex-row space-x-12">
          <motion.div
            layoutId="Contact"
            className="relative flex aspect-[3/4] h-screen cursor-pointer items-center justify-center bg-dark"
            onClick={() => router.push(ROUTES.HOME + "?section=contact")}
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
          ></motion.div>
        </div>
      </div>
    </Page>
  );
}

export default Contact;
