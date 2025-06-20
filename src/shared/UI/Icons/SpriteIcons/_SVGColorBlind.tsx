import { FC } from 'react';

import { useSpriteSVGHoverState } from '@/shared/hooks';
import { SpriteIconVariant, cls, processSpriteIcons } from '@/shared/utils';

import { SpriteIconsProps } from '../types';
import styles from './SpriteIcons.module.scss';

const _SVGColorBlind: FC<SpriteIconsProps> = ({
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
					d='M4.83944 25.4264C4.56706 24.9951 4.43088 24.7794 4.35464 24.4468C4.29738 24.197 4.29738 23.803 4.35464 23.5532C4.43088 23.2206 4.56706 23.0049 4.83944 22.5736C7.09025 19.0097 13.79 10 24 10C34.21 10 40.9097 19.0097 43.1606 22.5736C43.4329 23.0049 43.5691 23.2206 43.6454 23.5532C43.7026 23.803 43.7026 24.197 43.6454 24.4468C43.5691 24.7794 43.4329 24.9951 43.1606 25.4264C40.9097 28.9903 34.21 38 24 38C13.79 38 7.09025 28.9903 4.83944 25.4264Z'
					stroke='#404342'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M24 30C27.3137 30 30 27.3137 30 24C30 20.6863 27.3137 18 24 18C20.6863 18 18 20.6863 18 24C18 27.3137 20.6863 30 24 30Z'
					stroke='#F2FAF9'
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
					d='M4.83944 25.4264C4.56706 24.9951 4.43088 24.7794 4.35464 24.4468C4.29738 24.197 4.29738 23.803 4.35464 23.5532C4.43088 23.2206 4.56706 23.0049 4.83944 22.5736C7.09025 19.0097 13.79 10 24 10C34.21 10 40.9097 19.0097 43.1606 22.5736C43.4329 23.0049 43.5691 23.2206 43.6454 23.5532C43.7026 23.803 43.7026 24.197 43.6454 24.4468C43.5691 24.7794 43.4329 24.9951 43.1606 25.4264C40.9097 28.9903 34.21 38 24 38C13.79 38 7.09025 28.9903 4.83944 25.4264Z'
					stroke='#009990'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M24 30C27.3137 30 30 27.3137 30 24C30 20.6863 27.3137 18 24 18C20.6863 18 18 20.6863 18 24C18 27.3137 20.6863 30 24 30Z'
					stroke='#00FFF0'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</svg>
		),
	});
};

export default _SVGColorBlind;
