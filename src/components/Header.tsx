import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import config from "../../tailwind.config";

const socials = [
  "https://github.com/GuustTaillieu/",
  "https://www.linkedin.com/in/guust-taillieu-1b1b3a1b1/",
];

const email = "zita@gmail.com";

type Props = {};

const Header = (props: Props) => {
  return (
    <motion.header
      className="fixed top-0 z-50 mx-auto grid w-full grid-cols-2 items-center bg-light px-4 text-center text-sm shadow-md sm:text-lg md:grid-cols-3 md:px-20 lg:bg-transparent lg:shadow-none"
      layoutId="navigation"
    >
      <div className="hidden justify-start md:flex">
        <motion.div
          initial={{ opacity: 0, x: -400 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1.2,
            delay: 0.8,
            ease: "anticipate",
          }}
          className="space-x-2"
        >
          {socials?.map((social) => (
            <SocialIcon
              url={social}
              key={social}
              target="_blank"
              fgColor={
                ((config.theme?.extend?.colors as any)?.dark as string) ??
                "black"
              }
              bgColor="transparent"
              className="cursor-pointer"
            />
          ))}
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.8, ease: "anticipate" }}
        className="flex justify-start md:justify-center"
      >
        <h1 className="p-4 font-secondary font-semibold uppercase text-dark sm:text-nav">
          <Link href="/">Zita Worm</Link>
        </h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 400 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.8, ease: "anticipate" }}
      >
        <h2 className="flex flex-row items-center justify-end font-secondary font-semibold uppercase text-dark sm:text-nav">
          <SocialIcon
            url={"mailto:" + email}
            target="_blank"
            fgColor={
              ((config.theme?.extend?.colors as any)?.dark as string) ?? "black"
            }
            bgColor="transparent"
            className="cursor-pointer p-2"
          />
          <span className="p-4 pl-0">Get in touch</span>
        </h2>
      </motion.div>
    </motion.header>
  );
};

export default Header;
