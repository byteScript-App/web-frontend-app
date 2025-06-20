import { FC } from 'react';

import { useSpriteSVGHoverState } from '@/shared/hooks';
import { SpriteIconVariant, cls, processSpriteIcons } from '@/shared/utils';

import { SpriteIconsProps } from '../types';
import styles from './SpriteIcons.module.scss';

const _SVGJsonFormat: FC<SpriteIconsProps> = ({
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
				className={cls(styles.spriteIcon, className)}
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
					d='M24 16H24.04M26 16C26 17.1046 25.1046 18 24 18C22.8954 18 22 17.1046 22 16C22 14.8954 22.8954 14 24 14C25.1046 14 26 14.8954 26 16Z'
					stroke='#05A8F2'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M24 30H24.04M26 30C26 31.1046 25.1046 32 24 32C22.8954 32 22 31.1046 22 30C22 28.8954 22.8954 28 24 28C25.1046 28 26 28.8954 26 30Z'
					stroke='#05A8F2'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M26 30L23 36'
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
				className={cls(styles.spriteIcon, className)}
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
					d='M24 16H24.04M26 16C26 17.1046 25.1046 18 24 18C22.8954 18 22 17.1046 22 16C22 14.8954 22.8954 14 24 14C25.1046 14 26 14.8954 26 16Z'
					stroke='#00FFF0'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M24 30H24.04M26 30C26 31.1046 25.1046 32 24 32C22.8954 32 22 31.1046 22 30C22 28.8954 22.8954 28 24 28C25.1046 28 26 28.8954 26 30Z'
					stroke='#00FFF0'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M26 30L23 36'
					stroke='#00FFF0'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</svg>
		),
	});
};

export default _SVGJsonFormat;
