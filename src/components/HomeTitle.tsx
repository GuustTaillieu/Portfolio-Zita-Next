import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

type Props = {
  title: string;
  link: string;
};

const HomeTitle = ({ title, link }: Props) => {
  return (
    <Link href={link} className="h-[3.75rem] text-6xl lg:h-24 lg:text-8xl">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0.2 }}
        transition={{ duration: 1 }}
      >
        {title}
      </motion.h2>
    </Link>
  );
};

export default HomeTitle;
