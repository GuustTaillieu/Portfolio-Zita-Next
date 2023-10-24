import React from "react";
import Page from "./Page";
import HomeSection from "@/components/HomeSection";
import { useScroll, useTransform, motion } from "framer-motion";
import HomeTitle from "@/components/HomeTitle";
import { SectionType } from "../../types";
import ROUTES from "@/routes";
import { useRouter } from "next/router";

const sections: SectionType[] = [
  {
    title: "About me",
    link_url: ROUTES.ABOUT,
  },
  {
    title: "Experience",
    link_url: ROUTES.EXPERIENCE,
  },
  {
    title: "Skills",
    link_url: ROUTES.SKILLS,
  },
  {
    title: "Projects",
    link_url: ROUTES.PROJECTS,
  },
  {
    title: "Contact",
    link_url: ROUTES.CONTACT,
  },
];

export default function Home() {
  const container = React.useRef(null);
  const { asPath } = useRouter();

  React.useEffect(() => {
    const section = asPath.split("#")[1];
    if (section) {
      const el = document.getElementById(section.toId());
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [asPath]);

  const { scrollYProgress } = useScroll({
    container,
    offset: ["-100%", "100%"],
  });

  const yPos = useTransform(scrollYProgress, [0, 1], ["105%", "-105%"]);

  return (
    <Page className="sticky max-lg:bg-light max-lg:shadow-md">
      <div
        ref={container}
        className="pageContainer snap-y snap-mandatory py-24"
      >
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
          className="big:left-96 fixed left-16 top-2/3 h-[3.75rem] overflow-hidden max-lg:hidden lg:h-24 xl:left-32 2xl:left-60"
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
