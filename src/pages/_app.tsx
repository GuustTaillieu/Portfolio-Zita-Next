import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';

export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter();

	return (
		<AnimatePresence mode='wait'>
			<motion.div key={router.pathname}>
				<Component {...pageProps} />
				<motion.div
					className='absolute top-0 left-0 w-full h-full bg-dark origin-bottom'
					initial={{ scaleY: 0 }}
					animate={{ scaleY: 0 }}
					exit={{ scaleY: 1 }}
					transition={{
						duration: 1,
						ease: 'anticipate',
					}}></motion.div>
				<motion.div
					className='absolute top-0 left-0 w-full h-full bg-dark origin-top'
					initial={{ scaleY: 1 }}
					animate={{ scaleY: 0 }}
					exit={{ scaleY: 0 }}
					transition={{
						duration: 1,
						ease: 'anticipate',
					}}></motion.div>
			</motion.div>
		</AnimatePresence>
	);
}
