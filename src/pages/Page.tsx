import React, { useRef } from "react";
import CustomCursor from "@/components/CustomCursor";
import Header from "@/components/Header";
import Head from "next/head";

type Props = {
  children: React.ReactNode;
  headerBg?: boolean;
  headerInverted?: boolean;
  className?: React.HTMLAttributes<HTMLDivElement>["className"];
};

export default function Page({
  children,
  headerBg,
  headerInverted,
  className,
}: Props) {
  const stickyElement = useRef(null);

  return (
    <>
      <Head>
        <title>Zita Worm</title>
        <meta name="description" content="Zita Worm" />
      </Head>
      <Header
        ref={stickyElement}
        background={headerBg}
        invert={headerInverted}
        className={className}
      />
      <main className="relative">{children}</main>
      <CustomCursor stickyElement={stickyElement} />
    </>
  );
}
