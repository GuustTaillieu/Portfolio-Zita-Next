import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import "@/utils/extensions";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={router.pathname}>
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
}

declare global {
  interface String {
    toId(): string;
  }
}
