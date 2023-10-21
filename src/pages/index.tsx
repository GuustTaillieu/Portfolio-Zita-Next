import { useRef } from "react";
import Link from "next/link";
import Page from "./Page";
import HomeSection from "@/components/HomeSection";
import { useScroll, useTransform, motion } from "framer-motion";
import HomeTitle from "@/components/HomeTitle";

export default function Home() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    container,
    offset: ["-100%", "100%"],
  });

  const yPos = useTransform(scrollYProgress, [0, 1], ["105%", "-105%"]);

  return (
    <Page>
      <div
        ref={container}
        className="h-screen snap-y snap-mandatory overflow-x-hidden overflow-y-scroll bg-light py-24 font-default text-dark"
      >
        {/* ABOUT ME */}
        <HomeSection index={1} container={container} title="About me" />

        {/* EXPERIENCE */}
        <HomeSection index={2} container={container} title="Experience" />

        {/* SKILLS */}
        <HomeSection index={3} container={container} title="Skills" />

        {/* PROJECTS */}
        <HomeSection index={4} container={container} title="Projects" />

        {/* CONTACT */}
        <HomeSection index={5} container={container} title="Contact" />

        <div className="fixed left-16 top-1/2 hidden h-[3.75rem] overflow-hidden md:block lg:h-24 xl:left-32 2xl:left-60">
          <motion.div className="flex flex-col" style={{ translateY: yPos }}>
            <HomeTitle title="About me" link="/about" />

            <HomeTitle title="Experience" link="/experience" />

            <HomeTitle title="Skills" link="/skills" />

            <HomeTitle title="Projects" link="/projects" />

            <HomeTitle title="Contact" link="/contact" />
          </motion.div>
        </div>
      </div>
    </Page>
  );
}
