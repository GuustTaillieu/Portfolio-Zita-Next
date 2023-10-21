import React from "react";
import Image from "next/image";
import imgSrc from "@public/vercel.svg";
import { motion, useScroll, useTransform } from "framer-motion";

type Props = {
  index: number;
  container: React.MutableRefObject<null>;
  title: string;
};

function HomeSection({ index, container, title }: Props) {
  const target = React.useRef(null);
  const { scrollYProgress } = useScroll({
    container,
    target,
    offset: ["-100%", "100%"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [5, -10]);

  return (
    <section
      key={"section-" + index}
      className="relative flex h-[70vh] snap-center items-center justify-center md:justify-end md:pr-16 lg:h-[80vh] xl:pr-32 2xl:pr-60"
    >
      <motion.div
        ref={target}
        className="relative flex aspect-[3/4] h-4/5 items-center justify-center bg-dark lg:h-3/4"
        style={{ rotate }}
      >
        <Image
          src={imgSrc}
          alt="Picture of the author"
          className="blur-sm md:blur-none"
        />
        <div className="absolute inset-0 bg-dark opacity-30"></div>
        <h2 className="absolute left-1/2 top-1/2 flex -translate-x-1/2 text-3xl text-light md:hidden">
          {title}
        </h2>
      </motion.div>
    </section>
  );
}

export default HomeSection;
