import { FC } from 'react';

import { useSpriteSVGHoverState } from '@/shared/hooks';
import { SpriteIconVariant, processSpriteIcons } from '@/shared/utils';

import { SpriteIconsProps } from '../../types';

export const _SVGLoremIpsum: FC<SpriteIconsProps> = ({
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
					d='M24 8H40M24 16H40M24 24H40M8 32H40M8 40H40M24 12H40M24 20H40M8 28H40M8 36H40'
					stroke='#404342'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M8 8V24H20M14 18V12M14 8.2V8'
					stroke='#562BBA'
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
					d='M24 8H40M24 16H40M24 24H40M8 32H40M8 40H40M24 12H40M24 20H40M8 28H40M8 36H40'
					stroke='#009990'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M8 8V24H20M14 18V12M14 8.2V8'
					stroke='#00FFF0'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</svg>
		),
	});
};
