import React from "react";
import loadable from "@loadable/component";
import Page from "./Page";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaCalendarAlt, FaMapPin } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { info, timeline } from "@/data";
import config from "../../tailwind.config";
import { IconBaseProps } from "react-icons";
import BackButton from "@/components/BackButton";
import { useRouter } from "next/router";

const dark = (((config.theme?.extend?.colors as any)?.dark as string) ??
  "#000") as string;

const light = (((config.theme?.extend?.colors as any)?.light as string) ??
  "#fff") as string;

type Props = {};

function Experience({}: Props) {
  const router = useRouter();
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true);
    }, 600);
    () => clearTimeout(timeout);
  }, []);

  return (
    <Page headerInverted>
      <div className="pageContainer relative">
        <motion.div
          layoutId="Experience"
          transition={{ duration: 0.5 }}
          className="fixed flex h-screen w-full items-center justify-center bg-dark"
        >
          <Image
            src={info.backgroundImage}
            width={1080}
            height={720}
            alt="Picture of the author"
            className="h-full w-full bg-dark object-cover opacity-10 blur-sm"
          />
        </motion.div>

        {show && (
          <div className="flex h-full items-end pt-24">
            <div className="h-full min-h-fit w-full">
              <VerticalTimeline lineColor="#cccccc">
                {timeline
                  .sort((a, b) => a.date.end.localeCompare(b.date.end))
                  .map((item, index) => (
                    <React.Fragment key={index}>
                      <VerticalTimelineElement
                        contentStyle={{
                          background: light,
                          color: dark,
                          boxShadow: "none",
                          border: "none",
                          textAlign: "left",
                          padding: "1.25rem 2rem",
                        }}
                        contentArrowStyle={{
                          borderRight: "0.4rem solid " + light,
                        }}
                        icon={<GrabIcon nameIcon={item.icon} />}
                        iconStyle={{
                          background: light,
                          color: dark,
                          fontSize: "1.5rem",
                        }}
                        intersectionObserverProps={{
                          triggerOnce: false,
                        }}
                      >
                        <h3 className="font-secondary text-2xl font-bold">
                          {item.role}
                        </h3>
                        <p className="!-mt-1 font-secondary text-xl uppercase italic">
                          {item.company}
                        </p>
                        <p className="!mt-4 flex items-center gap-2 font-secondary">
                          <FaMapPin /> {item.location}
                        </p>
                        <p className="!mt-1 flex items-center gap-2 font-secondary">
                          <FaCalendarAlt /> {item.date.start}
                          <span className="font-default"> - </span>
                          {item.date.end}
                        </p>
                      </VerticalTimelineElement>
                    </React.Fragment>
                  ))}
              </VerticalTimeline>
            </div>
          </div>
        )}

        <BackButton
          className="bg-primaryDark text-dark"
          callback={() => router.push("/?section=experience")}
        />
      </div>
    </Page>
  );
}

interface typesPropsIcon {
  nameIcon: string;
  propsIcon?: IconBaseProps;
}

export function GrabIcon({ nameIcon, propsIcon }: typesPropsIcon) {
  const nameLib = nameIcon.slice(0, 2).toLowerCase();
  const lib = nameLib === "io" ? "io5" : nameLib;
  let ElementIcon = loadable(() => import(`react-icons/${lib}/index.js`), {
    resolveComponent: (el: any) => el[nameIcon],
  });
  if (!ElementIcon) {
    ElementIcon = loadable(() => import("react-icons/io5"), {
      resolveComponent: (el: any) => el[nameIcon],
    });
  }

  return <ElementIcon {...propsIcon} />;
}
export default Experience;
