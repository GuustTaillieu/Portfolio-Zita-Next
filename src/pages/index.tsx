import { useRef } from "react";
import Page from "./Page";
import HomeSection from "@/components/HomeSection";
import { useScroll, useTransform, motion } from "framer-motion";
import HomeTitle from "@/components/HomeTitle";
import { SectionType } from "../../types";

const sections: SectionType[] = [
  {
    title: "About me",
    link_url: "/about",
  },
  {
    title: "Experience",
    link_url: "/experience",
  },
  {
    title: "Skills",
    link_url: "/skills",
  },
  {
    title: "Projects",
    link_url: "/projects",
  },
  {
    title: "Contact",
    link_url: "/contact",
  },
];

export default function Home() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    container,
    offset: ["-100%", "100%"],
  });

  const yPos = useTransform(scrollYProgress, [0, 1], ["105%", "-105%"]);

  return (
    <Page>
      <div ref={container} className="pageContainer py-24">
        {sections?.map((section) => (
          <HomeSection
            key={section.title}
            container={container}
            section={section}
          />
        ))}

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 0.1 } }}
          exit={{ opacity: 0, x: -100, transition: { duration: 0.2 } }}
          className="fixed left-16 top-2/3 hidden h-[3.75rem] overflow-hidden md:block lg:h-24 xl:left-32 2xl:left-60"
        >
          <motion.div className="flex flex-col" style={{ translateY: yPos }}>
            {sections?.map((section) => (
              <HomeTitle key={section.title} section={section} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </Page>
  );
}
