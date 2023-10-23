import Header from "@/components/Header";
import Head from "next/head";

type Props = {
  children: React.ReactNode;
  headerBg?: boolean;
  headerInverted?: boolean;
};

export default function Page({ children, headerBg, headerInverted }: Props) {
  return (
    <>
      <Head>
        <title>Zita Worm</title>
        <meta name="description" content="Zita Worm" />
      </Head>
      <Header background={headerBg} invert={headerInverted} />
      <main className="relative">{children}</main>
    </>
  );
}
