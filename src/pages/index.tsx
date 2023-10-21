import { useRef } from 'react';
import Link from 'next/link';
import Page from './Page';
import HomeSection from '@/components/HomeSection';

export default function Home() {
	const container = useRef(null);

	return (
		<Page>
			<div
				ref={container}
				className='h-screen bg-light snap-y snap-mandatory overflow-x-hidden overflow-y-scroll font-default text-dark'>
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
			</div>
		</Page>
	);
}
