import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { SectionType } from "../../types";
import { useRouter } from "next/router";

type Props = {
  section: SectionType;
};

const HomeTitle = ({ section }: Props) => {
  const router = useRouter();

  return (
    <Link
      href={section.link_url}
      scroll={false}
      className="h-[3.75rem] text-6xl uppercase lg:h-24 lg:text-8xl"
    >
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0.2 }}
        transition={{ duration: 1 }}
      >
        {section.title}
      </motion.h2>
    </Link>
  );
};

export default HomeTitle;
