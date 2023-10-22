import React, { useEffect } from "react";
import Page from "./Page";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import TrackImage from "@/components/TrackImage";
import { projects } from "@/routes";

const DRAGSPEED = 1.3;

type Props = {};

const Projects = ({}: Props) => {
  const track = React.useRef<HTMLDivElement>(null);
  const [trackHalf, setTrackHalf] = React.useState(0);

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
    if (track.current) {
      const dragPadding = window.innerWidth / 2;
      setTrackHalf(
        track.current.scrollWidth - track.current.offsetWidth + dragPadding,
      );
    }
  }, []);

  return (
    <Page>
      <div
        ref={track}
        className="flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-dark font-default text-light"
      >
        <h2 className="sectionTitle mb-8">Projects</h2>
        <h3 className="mb-4 font-secondary text-2xl uppercase tracking-[10px] opacity-40">
          Drag to scroll
        </h3>
        <motion.div
          className="flex h-1/2 flex-row space-x-8"
          drag="x"
          _dragX={dragX}
          style={{ x: springy }}
          dragConstraints={{
            left: -(trackHalf * DRAGSPEED),
            right: trackHalf * DRAGSPEED,
          }}
        >
          {projects.map((project, i) => (
            <TrackImage key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </Page>
  );
};

export default Projects;
