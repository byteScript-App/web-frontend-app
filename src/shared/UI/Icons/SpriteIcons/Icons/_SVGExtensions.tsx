import { FC } from 'react';

import { useSpriteSVGHoverState } from '@/shared/hooks';
import { SpriteIconVariant, processSpriteIcons } from '@/shared/utils';

import { SpriteIconsProps } from '../../types';

export const _SVGExtensions: FC<SpriteIconsProps> = ({
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
					d='M18 9C18 6.23858 20.2386 4 23 4V4C25.7614 4 28 6.23858 28 9V12H30C32.7956 12 34.1935 12 35.2961 12.4567C36.7663 13.0657 37.9343 14.2337 38.5433 15.7039C39 16.8065 39 18.2044 39 21V21H42C44.7614 21 47 23.2386 47 26V26C47 28.7614 44.7614 31 42 31H39V34.4C39 37.7603 39 39.4405 38.346 40.7239C37.7708 41.8529 36.8529 42.7708 35.7239 43.346C34.4405 44 32.7603 44 29.4 44H28V40.5C28 38.0147 25.9853 36 23.5 36V36C21.0147 36 19 38.0147 19 40.5V44H16.6C13.2397 44 11.5595 44 10.2761 43.346C9.14708 42.7708 8.2292 41.8529 7.65396 40.7239C7 39.4405 7 37.7603 7 34.4V31H10C12.7614 31 15 28.7614 15 26V26C15 23.2386 12.7614 21 10 21H7V21C7 18.2044 7 16.8065 7.45672 15.7039C8.06569 14.2337 9.23373 13.0657 10.7039 12.4567C11.8065 12 13.2044 12 16 12H18V9Z'
					stroke='#404342'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M7 24H9.5C10.6046 24 11.5 24.8954 11.5 26V26C11.5 27.1046 10.6046 28 9.5 28H7'
					stroke='#562BBA'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M22 44L22 40.5C22 39.6716 22.6716 39 23.5 39V39C24.3284 39 25 39.6716 25 40.5L25 44'
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
					d='M18 9C18 6.23858 20.2386 4 23 4V4C25.7614 4 28 6.23858 28 9V12H30C32.7956 12 34.1935 12 35.2961 12.4567C36.7663 13.0657 37.9343 14.2337 38.5433 15.7039C39 16.8065 39 18.2044 39 21V21H42C44.7614 21 47 23.2386 47 26V26C47 28.7614 44.7614 31 42 31H39V34.4C39 37.7603 39 39.4405 38.346 40.7239C37.7708 41.8529 36.8529 42.7708 35.7239 43.346C34.4405 44 32.7603 44 29.4 44H28V40.5C28 38.0147 25.9853 36 23.5 36V36C21.0147 36 19 38.0147 19 40.5V44H16.6C13.2397 44 11.5595 44 10.2761 43.346C9.14708 42.7708 8.2292 41.8529 7.65396 40.7239C7 39.4405 7 37.7603 7 34.4V31H10C12.7614 31 15 28.7614 15 26V26C15 23.2386 12.7614 21 10 21H7V21C7 18.2044 7 16.8065 7.45672 15.7039C8.06569 14.2337 9.23373 13.0657 10.7039 12.4567C11.8065 12 13.2044 12 16 12H18V9Z'
					stroke='#009990'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M7 24H9.5C10.6046 24 11.5 24.8954 11.5 26V26C11.5 27.1046 10.6046 28 9.5 28H7'
					stroke='#00FFF0'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M22 44L22 40.5C22 39.6716 22.6716 39 23.5 39V39C24.3284 39 25 39.6716 25 40.5L25 44'
					stroke='#00FFF0'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</svg>
		),
	});
};
