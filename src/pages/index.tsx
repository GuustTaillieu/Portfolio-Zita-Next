import { useRef } from "react";
import Link from "next/link";
import Page from "./Page";
import HomeSection from "@/components/HomeSection";

export default function Home() {
  const container = useRef(null);

  return (
    <Page>
      <div
        ref={container}
        className="h-screen snap-y snap-mandatory overflow-x-hidden overflow-y-scroll bg-light py-24 font-default text-dark"
      >
        {/* ABOUT ME */}
        <HomeSection index={1} container={container} />

        {/* EXPERIENCE */}
        <HomeSection index={2} container={container} />

        {/* SKILLS */}
        <HomeSection index={3} container={container} />

        {/* PROJECTS */}
        <HomeSection index={4} container={container} />

        {/* CONTACT */}
        <HomeSection index={5} container={container} />

        <div className="fixed left-60 top-1/2">
          <Link href="/about">About</Link>

          <Link href="/experience">Experience</Link>

          <Link href="/skills">Skills</Link>

          <Link href="/projects">Projects</Link>

          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </Page>
  );
}
