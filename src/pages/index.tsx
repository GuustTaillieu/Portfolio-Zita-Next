import Head from 'next/head';
import Header from '@/components/Header';

export default function Home() {
	return (
		<div className='bg-light snap-y snap-mandatory overflow-x-hidden overflow-y-scroll font-default text-dark'>
			<Head>
				<title>Zita Worm</title>
				<meta name='description' content='Zita Worm' />
			</Head>

			<main>
				<Header />

				<section className='snap-center'>{/* HERO */}</section>

				<section className='snap-center'>{/* ABOUT */}</section>

				<section className='snap-center'>{/* EXPERIENCE */}</section>

				<section className='snap-center'>{/* SKILLS */}</section>

				<section className='snap-center'>{/* PROJECTS */}</section>

				<section className='snap-center'>{/* CONTACT */}</section>
			</main>
		</div>
	);
}
