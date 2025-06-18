import { FC } from 'react';

import { useSpriteSVGHoverState } from '@/shared/hooks';
import { SpriteIconVariant, processSpriteIcons } from '@/shared/utils';

import { SpriteIconsProps } from '../types';

const _SVGTextEscape: FC<SpriteIconsProps> = ({
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
				<rect
					x='6'
					y='6'
					width='36'
					height='36'
					rx='6'
					stroke='#404342'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M16 16V16C16 14.8954 16.8954 14 18 14H30C31.1046 14 32 14.8954 32 16V16'
					stroke='#F2FAF9'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M24 14V34'
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
				className={className}
				onMouseEnter={() => onHover(SpriteIconVariant.ACTIVE)}
				onMouseLeave={() => onHover(SpriteIconVariant.DEFAULT)}
				viewBox='0 0 48 48'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<rect
					x='6'
					y='6'
					width='36'
					height='36'
					rx='6'
					stroke='#009990'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M16 16V16C16 14.8954 16.8954 14 18 14H30C31.1046 14 32 14.8954 32 16V16'
					stroke='#00FFF0'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M24 14V34'
					stroke='#00FFF0'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</svg>
		),
	});
};

export default _SVGTextEscape;
