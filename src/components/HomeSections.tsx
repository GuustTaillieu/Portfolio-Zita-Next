import { sections } from "@/data";
import React from "react";
import HomeSection from "./HomeSection";

type Props = {
  container: React.MutableRefObject<null>;
};

const HomeSections = ({ container }: Props) => {
  return (
    <>
      {sections?.map((section) => (
        <HomeSection
          key={section.title}
          container={container}
          section={section}
        />
      ))}
    </>
  );
};

export default HomeSections;
