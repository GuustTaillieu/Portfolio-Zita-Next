import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { SocialIcon } from 'react-social-icons';
import config from '../../tailwind.config';

const socials = [
	'https://github.com/GuustTaillieu/',
	'https://www.linkedin.com/in/guust-taillieu-1b1b3a1b1/',
];

const email = 'zita@gmail.com';

type Props = {};

const Header = (props: Props) => {
	return (
		<motion.header
			className='mx-auto grid grid-cols-2 md:grid-cols-3 text-center w-full px-4 fixed top-0 items-center z-50 md:px-20'
			layoutId='navigation'
			transition={{ duration: 1, ease: 'easeInOut', delay: 1 }}>
			<div className='flex justify-start'>
				<motion.div
					initial={{ opacity: 0, x: -400 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{
						duration: 1.2,
						delay: 0.8,
						ease: 'anticipate',
					}}
					className='space-x-2 hidden md:flex'>
					{socials?.map((social) => (
						<SocialIcon
							url={social}
							key={social}
							target='_blank'
							fgColor={
								((config.theme?.extend?.colors as any)
									?.dark as string) ?? 'black'
							}
							bgColor='transparent'
							className='cursor-pointer'
						/>
					))}
				</motion.div>
			</div>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1.2, delay: 0.8, ease: 'anticipate' }}
				className='flex justify-start md:justify-center'>
				<h1 className='font-semibold sm:text-nav text-dark font-secondary uppercase p-4 text-lg'>
					<Link href='/'>Zita Worm</Link>
				</h1>
			</motion.div>
			<motion.div
				initial={{ opacity: 0, x: 400 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 1.2, delay: 0.8, ease: 'anticipate' }}>
				<h2 className='font-semibold sm:text-nav text-dark font-secondary uppercase text-lg flex-row items-center flex justify-end'>
					<SocialIcon
						url={'mailto:' + email}
						target='_blank'
						fgColor={
							((config.theme?.extend?.colors as any)
								?.dark as string) ?? 'black'
						}
						bgColor='transparent'
						className='cursor-pointer'
					/>
					<span className='p-4 pl-0'>Get in touch</span>
				</h2>
			</motion.div>
		</motion.header>
	);
};

export default Header;
