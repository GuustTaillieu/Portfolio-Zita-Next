import React from "react";
import Page from "./Page";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRouter } from "next/router";
import HomeTitles from "@/components/HomeTitles";
import HomeSections from "@/components/HomeSections";
import useCursor from "@/hooks/useCursor";

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
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                    <HomeTitles yPos={yPos} />
                </motion.div>

                <motion.div
                    initial={
                        asPath.includes("#") ? {} : { x: "-20%", opacity: 0 }
                    }
                    animate={{ x: "0%", opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                    <HomeSections container={container} />
                </motion.div>
            </div>
        </Page>
    );
}
