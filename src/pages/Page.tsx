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
  return (
    <>
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
    </>
  );
}
