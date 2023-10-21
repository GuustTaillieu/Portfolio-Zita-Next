import React from 'react';
import Image from 'next/image';
import imgSrc from '@public/next.svg';
import { motion, useScroll, useTransform } from 'framer-motion';

type Props = {
	index: number;
	container: React.MutableRefObject<null>;
};

function HomeSection({ index, container }: Props) {
	const target = React.useRef(null);
	const { scrollYProgress } = useScroll({
		container,
		target,
		offset: ['-100%', '100%'],
	});

	const rotate = useTransform(scrollYProgress, [0, 1], [5, -10]);

	return (
		<section
			key={'section-' + index}
			className='relative h-[80vh] flex justify-end items-center pr-60 snap-center'>
			<motion.div
				ref={target}
				className='h-3/4 aspect-[3/4] bg-dark flex justify-center items-center'
				style={{ rotate }}>
				<Image src={imgSrc} alt='Picture of the author' />
			</motion.div>
		</section>
	);
}

export default HomeSection;
