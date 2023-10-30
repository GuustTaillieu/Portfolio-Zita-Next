import React from "react";
import CustomCursor from "@/components/CustomCursor";
import Header from "@/components/Header";
import Head from "next/head";
import { CursorContext } from "@/hooks/useCursor";

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
    return (
        <CursorContext>
            <Head>
                <title>Zita Worm</title>
                <meta name="description" content="Zita Worm" />
            </Head>
            <Header
                background={headerBg}
                invert={headerInverted}
                className={className}
            />
            <main className="relative">{children}</main>
            <CustomCursor />
        </CursorContext>
    );
}
