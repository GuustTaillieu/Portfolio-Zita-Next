import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import ROUTES from "@/routes";
import { useRouter } from "next/router";
import Magnetic from "./Magnetic";
import useCursor from "@/hooks/useCursor";

const socials = [
    "https://github.com/GuustTaillieu/",
    "https://www.linkedin.com/in/guust-taillieu-1b1b3a1b1/",
];

const email = "zita@gmail.com";

type Props = {
    background?: boolean;
    invert?: boolean;
    className?: React.HTMLAttributes<HTMLDivElement>["className"];
};

const Header = ({ background, invert, className = "" }: Props) => {
    const router = useRouter();
    const { addStickyElement } = useCursor();

    return (
        <motion.header
            layoutId="navigation"
            className={
                `fixed top-0 z-50 mx-auto grid w-full grid-cols-2 items-center px-4 text-center text-lg text-white !opacity-90 mix-blend-difference sm:text-lg md:grid-cols-3 header:px-20` +
                (background ? " bg-light shadow-md" : "") +
                className
            }
            style={invert ? { filter: "invert(1)" } : {}}
        >
            <div className="hidden justify-start md:flex">
                <motion.div
                    initial={{ opacity: 0, x: -400 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 1.2,
                        delay: 0.8,
                        ease: "anticipate",
                    }}
                    className="flex flex-row gap-2"
                >
                    {socials?.map((social) => (
                        <Magnetic key={social} strength={0.2}>
                            <SocialIcon
                                ref={(el) => addStickyElement(el)}
                                data-sticky="40"
                                url={social}
                                key={social}
                                target="_blank"
                                fgColor="white"
                                bgColor="transparent"
                                className="cursor-pointer"
                            />
                        </Magnetic>
                    ))}
                </motion.div>
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 1.2,
                    delay: 0.8,
                    ease: "anticipate",
                }}
                className="flex justify-start md:justify-center"
            >
                <h1
                    ref={(el) => addStickyElement(el)}
                    data-sticky="60"
                    className="relative p-4 font-secondary font-semibold uppercase sm:text-nav"
                >
                    <Link href={ROUTES.HOME}>Zita Worm</Link>
                </h1>
            </motion.div>
            <motion.div
                className="flex justify-end"
                initial={{ opacity: 0, x: 400 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                    duration: 1.2,
                    delay: 0.8,
                    ease: "anticipate",
                }}
            >
                <h2
                    ref={(el) => addStickyElement(el)}
                    data-sticky="60"
                    className="flex w-fit flex-row items-center justify-end font-secondary font-semibold uppercase sm:text-nav"
                    onClick={() => router.push(ROUTES.CONTACT)}
                >
                    <SocialIcon
                        url={"mailto:" + email}
                        onClick={(e) => e.preventDefault()}
                        target="_blank"
                        fgColor="white"
                        bgColor="transparent"
                        className="!hidden cursor-pointer p-2 sm:!inline-block"
                    />
                    <span className="cursor-pointer p-4 pl-0">
                        Get in touch
                    </span>
                </h2>
            </motion.div>
        </motion.header>
    );
};

export default Header;
