import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { motion } from "framer-motion";
import ROUTES from "@/routes";

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
      className="aspect-[3/4] h-full bg-gray-400 shadow-xl"
      layoutId={project.title}
      onMouseDown={() => setClicking(true)}
      onMouseMove={() => setClicking(false)}
      onMouseUp={() => clicking && router.push(ROUTES.PROJECT(project.id))}
      key={project.id}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Image
        draggable={false}
        src={project.image}
        width={1920}
        height={1080}
        alt="Picture of the author"
        className="h-full w-full object-cover"
      />
    </motion.div>
  );
};

export default TrackImage;
