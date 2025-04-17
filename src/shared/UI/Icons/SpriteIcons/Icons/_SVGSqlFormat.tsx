import { FC } from 'react';

import { useSpriteSVGHoverState } from '@/shared/hooks';
import { SpriteIconVariant, processSpriteIcons } from '@/shared/utils';

import { SpriteIconsProps } from '../../types';

export const _SVGSqlFormat: FC<SpriteIconsProps> = ({
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
				className={className}
				onMouseEnter={() => onHover(SpriteIconVariant.ACTIVE)}
				onMouseLeave={() => onHover(SpriteIconVariant.DEFAULT)}
				viewBox='0 0 48 48'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M44 24C44 27.32 40 30 30 30C20 30 16 27.32 16 24M44 10C44 13.3137 39.9411 16 30 16C20.0589 16 16 13.3137 16 10M44 10C44 6.68629 39.9411 4 30 4C20.0589 4 16 6.68629 16 10M44 10V38C44 41.32 40 44 30 44C20 44 16 41.32 16 38V10'
					stroke='#404342'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M30 16C39.9411 16 44 13.3137 44 10C44 6.68629 39.9411 4 30 4C20.0589 4 16 6.68629 16 10C16 13.3137 20.0589 16 30 16Z'
					stroke='#D89126'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M10 28.3C5.71429 28.3 4 26.826 4 25M10 20.6C5.73952 20.6 4 19.1225 4 17.3M4 17.3C4 15.4775 5.73952 14 10 14M4 17.3V32.7C4 34.526 5.71429 36 10 36'
					stroke='#404342'
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
				className={className}
				onMouseEnter={() => onHover(SpriteIconVariant.ACTIVE)}
				onMouseLeave={() => onHover(SpriteIconVariant.DEFAULT)}
				viewBox='0 0 48 48'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M44 24C44 27.32 40 30 30 30C20 30 16 27.32 16 24M44 10C44 13.3137 39.9411 16 30 16C20.0589 16 16 13.3137 16 10M44 10C44 6.68629 39.9411 4 30 4C20.0589 4 16 6.68629 16 10M44 10V38C44 41.32 40 44 30 44C20 44 16 41.32 16 38V10'
					stroke='#009990'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M30 16C39.9411 16 44 13.3137 44 10C44 6.68629 39.9411 4 30 4C20.0589 4 16 6.68629 16 10C16 13.3137 20.0589 16 30 16Z'
					stroke='#00FFF0'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M10 28.3C5.71429 28.3 4 26.826 4 25M10 20.6C5.73952 20.6 4 19.1225 4 17.3M4 17.3C4 15.4775 5.73952 14 10 14M4 17.3V32.7C4 34.526 5.71429 36 10 36'
					stroke='#009990'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</svg>
		),
	});
};
