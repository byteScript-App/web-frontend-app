import { FC } from 'react';

import { useSpriteSVGHoverState } from '@/shared/hooks';
import { SpriteIconVariant, processSpriteIcons } from '@/shared/utils';

import { SpriteIconsProps } from '../../types';

export const _SVGJsonToTable: FC<SpriteIconsProps> = ({
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
					d='M34 24C34 26.2133 29.5556 28 24 28C18.4444 28 14 26.2133 14 24'
					stroke='#05A8F2'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M24 20C29.5228 20 34 18.2091 34 16C34 13.7909 29.5228 12 24 12C18.4772 12 14 13.7909 14 16C14 18.2091 18.4772 20 24 20Z'
					stroke='#05A8F2'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M14 16V32.4706C14 34.4235 18.4444 36 24 36C29.5556 36 34 34.4235 34 32.4706V16'
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
				className={className}
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
					d='M34 24C34 26.2133 29.5556 28 24 28C18.4444 28 14 26.2133 14 24'
					stroke='#00FFF0'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M24 20C29.5228 20 34 18.2091 34 16C34 13.7909 29.5228 12 24 12C18.4772 12 14 13.7909 14 16C14 18.2091 18.4772 20 24 20Z'
					stroke='#00FFF0'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M14 16V32.4706C14 34.4235 18.4444 36 24 36C29.5556 36 34 34.4235 34 32.4706V16'
					stroke='#00FFF0'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</svg>
		),
	});
};
