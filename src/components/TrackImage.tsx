import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { motion } from "framer-motion";
import ROUTES from "@/routes";
import { projectImageVariant } from "@/pages/projects";

type Props = {
  project: {
    id: string;
    title: string;
    description: string;
    image: string;
  };
};

const TrackImage = ({ project }: Props) => {
  const router = useRouter();
  const [clicking, setClicking] = React.useState<boolean>(false);

  return (
    <motion.div
      key={project.id}
      className="z-50 aspect-[5/3] w-full overflow-hidden rounded-md bg-gray-400 shadow-lg md:aspect-[3/4] md:h-full"
      layoutId={project.title}
      onMouseDown={() => setClicking(true)}
      onMouseMove={() => setClicking(false)}
      onMouseUp={() => clicking && router.push(ROUTES.PROJECT(project.id))}
      variants={projectImageVariant}
      transition={{ duration: 0.5 }}
    >
      <Image
        draggable={false}
        src={project.image}
        width={100}
        height={200}
        alt="Project image"
        className="h-full w-full object-cover"
      />
    </motion.div>
  );
};

export default TrackImage;
