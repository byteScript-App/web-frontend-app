import { FC } from 'react';

import { useSpriteSVGHoverState } from '@/shared/hooks';
import { SpriteIconVariant, cls, processSpriteIcons } from '@/shared/utils';

import { SpriteIconsProps } from '../types';
import styles from './SpriteIcons.module.scss';

const _SVGJsonPathTest: FC<SpriteIconsProps> = ({
	width = 48,
	lineHeight = 48,
	hoverEffect = true,
	className,
}) => {
	const { onHover, elementState } = useSpriteSVGHoverState(hoverEffect);

	return processSpriteIcons({
		key: elementState,
		defaultState: (
			<svg
				width={width}
				height={lineHeight}
				className={cls(styles.spriteIcons, className)}
				onMouseEnter={() => onHover(SpriteIconVariant.ACTIVE)}
				onMouseLeave={() => onHover(SpriteIconVariant.DEFAULT)}
				viewBox='0 0 48 48'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M37 40C39.524 40 42 37.954 42 35.428V26L43.9996 24L42 22V12.572C42 10.046 39.526 8 37 8'
					stroke='#404342'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M11 8C8.474 8 6 10.046 6 12.572V22L4 24L6 26V35.428C6 37.954 8.474 40 11 40'
					stroke='#404342'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M24 24H24.04M26 24C26 25.1046 25.1046 26 24 26C22.8954 26 22 25.1046 22 24C22 22.8954 22.8954 22 24 22C25.1046 22 26 22.8954 26 24Z'
					stroke='#05A8F2'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M34 24H34.04M36 24C36 25.1046 35.1046 26 34 26C32.8954 26 32 25.1046 32 24C32 22.8954 32.8954 22 34 22C35.1046 22 36 22.8954 36 24Z'
					stroke='#05A8F2'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M14 24H14.04M16 24C16 25.1046 15.1046 26 14 26C12.8954 26 12 25.1046 12 24C12 22.8954 12.8954 22 14 22C15.1046 22 16 22.8954 16 24Z'
					stroke='#05A8F2'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</svg>
		),
		activeState: (
			<svg
				width={width}
				height={lineHeight}
				className={cls(styles.spriteIcons, className)}
				onMouseEnter={() => onHover(SpriteIconVariant.ACTIVE)}
				onMouseLeave={() => onHover(SpriteIconVariant.DEFAULT)}
				viewBox='0 0 48 48'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M37 40C39.524 40 42 37.954 42 35.428V26L43.9996 24L42 22V12.572C42 10.046 39.526 8 37 8'
					stroke='#009990'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M11 8C8.474 8 6 10.046 6 12.572V22L4 24L6 26V35.428C6 37.954 8.474 40 11 40'
					stroke='#009990'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M24 24H24.04M26 24C26 25.1046 25.1046 26 24 26C22.8954 26 22 25.1046 22 24C22 22.8954 22.8954 22 24 22C25.1046 22 26 22.8954 26 24Z'
					stroke='#00FFF0'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M34 24H34.04M36 24C36 25.1046 35.1046 26 34 26C32.8954 26 32 25.1046 32 24C32 22.8954 32.8954 22 34 22C35.1046 22 36 22.8954 36 24Z'
					stroke='#00FFF0'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M14 24H14.04M16 24C16 25.1046 15.1046 26 14 26C12.8954 26 12 25.1046 12 24C12 22.8954 12.8954 22 14 22C15.1046 22 16 22.8954 16 24Z'
					stroke='#00FFF0'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</svg>
		),
	});
};

export default _SVGJsonPathTest;
