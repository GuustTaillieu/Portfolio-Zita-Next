import React, { SyntheticEvent, useEffect } from "react";
import Page from "./Page";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import TrackImage from "@/components/TrackImage";
import { projects } from "@/routes";

export const projectImageVariant = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.5, staggerChildren: 0.1, delayChildren: 0.5 },
  },
};

const DRAGSPEED = 1.3;

type Props = {};

const Projects = ({}: Props) => {
  const track = React.useRef<HTMLDivElement>(null);
  const [trackHalf, setTrackHalf] = React.useState(0);
  const [isMobile, setIsMobile] = React.useState(false);

  const dragX = useMotionValue(0);
  const dragXTransformed = useTransform(
    dragX,
    [-trackHalf * DRAGSPEED, trackHalf * DRAGSPEED],
    [-trackHalf, trackHalf],
  );
  const springy = useSpring(dragXTransformed, {
    damping: 25,
    stiffness: 200,
  });

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    if (track.current) {
      const dragPadding = window.innerWidth / 2;
      setTrackHalf(
        track.current.scrollWidth - track.current.offsetWidth + dragPadding,
      );
    }
  }, []);

  function handleResize(this: Window, ev: UIEvent) {
    setIsMobile(this.innerWidth < 768);
  }

  return (
    <Page headerInverted={true}>
      <div
        ref={track}
        className="flex h-screen w-screen flex-col items-center justify-start overflow-y-scroll bg-dark pt-24 font-default text-light md:justify-center md:overflow-hidden md:pt-0"
      >
        <h2 className="sectionTitle mb-10 md:mb-4">Projects</h2>
        <h3 className="mb-8 hidden font-secondary text-2xl uppercase tracking-[10px] opacity-40 md:flex">
          Drag to scroll
        </h3>

        <div className="w-4/5 md:h-1/2 md:w-[unset] md:translate-x-1/3">
          <motion.div
            className="mb-8 flex h-full flex-col space-y-8 md:mb-0 md:flex-row md:space-x-8 md:space-y-0"
            drag={isMobile ? false : "x"}
            _dragX={dragX}
            style={{ x: springy }}
            dragConstraints={{
              left: -trackHalf,
              right: 0,
            }}
            variants={projectImageVariant}
            initial="initial"
            animate="animate"
          >
            {projects.map((project, i) => (
              <TrackImage key={project.id} project={project} />
            ))}
          </motion.div>
        </div>
      </div>
    </Page>
  );
};

export default Projects;
