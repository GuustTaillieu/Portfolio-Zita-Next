import Header from "@/components/Header";
import Head from "next/head";

type Props = {
  children: React.ReactNode;
};

export default function Page({ children }: Props) {
  return (
    <>
      <Head>
        <title>Zita Worm</title>
        <meta name="description" content="Zita Worm" />
      </Head>
      <Header />
      <main>{children}</main>
    </>
  );
}
