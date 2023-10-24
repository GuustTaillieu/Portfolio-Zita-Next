import React from "react";
import { motion } from "framer-motion";
import { TbArrowBackUp } from "react-icons/tb";
import { useRouter } from "next/router";
import { HTMLAttributes } from "react";

type Props = {
  callback?: () => void;
  className?: HTMLAttributes<HTMLButtonElement>["className"];
};

const BackButton = ({ callback, className }: Props) => {
  const router = useRouter();
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="absolute left-4 top-16 m-3 aspect-square overflow-hidden rounded-full md:left-20"
    >
      <button
        onClick={() => (callback ? callback() : router.back())}
        className={
          className
            ? className +
              " hover:bg-primary p-2 opacity-40 transition-all hover:opacity-100"
            : "bg-dark p-2 text-light opacity-40 transition-opacity hover:opacity-100"
        }
      >
        <TbArrowBackUp className="h-6 w-6" />
      </button>
    </motion.div>
  );
};

export default BackButton;
