import { FC } from 'react';

import { useSpriteSVGHoverState } from '@/shared/hooks';
import { SpriteIconVariant, cls, processSpriteIcons } from '@/shared/utils';

import { SpriteIconsProps } from '../types';
import styles from './SpriteIcons.module.scss';

const _SVGImageConvert: FC<SpriteIconsProps> = ({
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
					d='M9.73137 42.2686L26.7373 25.2627L26.7373 25.2627C27.5293 24.4707 27.9253 24.0747 28.382 23.9263C28.7837 23.7958 29.2163 23.7958 29.618 23.9263C30.0747 24.0747 30.4707 24.4707 31.2627 25.2627L39 33V35.4C39 38.7603 39 40.4405 38.346 41.7239C37.7708 42.8529 36.8529 43.7708 35.7239 44.346C34.4405 45 32.7603 45 29.4 45H10.8627C9.65111 45 9.04529 45 8.76477 44.7604C8.52136 44.5525 8.39218 44.2407 8.4173 43.9215C8.44624 43.5538 8.87462 43.1254 9.73137 42.2686Z'
					stroke='#404342'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M17 9H12.6C9.23969 9 7.55953 9 6.27606 9.65396C5.14708 10.2292 4.2292 11.1471 3.65396 12.2761C3 13.5595 3 15.2397 3 18.6V35.4C3 38.7603 3 40.4405 3.65396 41.7239C4.2292 42.8529 5.14708 43.7708 6.27606 44.346C7.55953 45 9.23968 45 12.6 45H29.4C32.7603 45 34.4405 45 35.7239 44.346C36.8529 43.7708 37.7708 42.8529 38.346 41.7239C39 40.4405 39 38.7603 39 35.4V23'
					stroke='#404342'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M14 24C16.2091 24 18 22.2091 18 20C18 17.7909 16.2091 16 14 16C11.7909 16 10 17.7909 10 20C10 22.2091 11.7909 24 14 24Z'
					stroke='#404342'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M32 7H44L40 3'
					stroke='#562BBA'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M36 13H24L28 17'
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
				className={cls(styles.spriteIcons, className)}
				onMouseEnter={() => onHover(SpriteIconVariant.ACTIVE)}
				onMouseLeave={() => onHover(SpriteIconVariant.DEFAULT)}
				viewBox='0 0 48 48'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M9.73137 42.2686L26.7373 25.2627L26.7373 25.2627C27.5293 24.4707 27.9253 24.0747 28.382 23.9263C28.7837 23.7958 29.2163 23.7958 29.618 23.9263C30.0747 24.0747 30.4707 24.4707 31.2627 25.2627L39 33V35.4C39 38.7603 39 40.4405 38.346 41.7239C37.7708 42.8529 36.8529 43.7708 35.7239 44.346C34.4405 45 32.7603 45 29.4 45H10.8627C9.65111 45 9.04529 45 8.76477 44.7604C8.52136 44.5525 8.39218 44.2407 8.4173 43.9215C8.44624 43.5538 8.87462 43.1254 9.73137 42.2686Z'
					stroke='#009990'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M17 9H12.6C9.23969 9 7.55953 9 6.27606 9.65396C5.14708 10.2292 4.2292 11.1471 3.65396 12.2761C3 13.5595 3 15.2397 3 18.6V35.4C3 38.7603 3 40.4405 3.65396 41.7239C4.2292 42.8529 5.14708 43.7708 6.27606 44.346C7.55953 45 9.23968 45 12.6 45H29.4C32.7603 45 34.4405 45 35.7239 44.346C36.8529 43.7708 37.7708 42.8529 38.346 41.7239C39 40.4405 39 38.7603 39 35.4V23'
					stroke='#009990'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M14 24C16.2091 24 18 22.2091 18 20C18 17.7909 16.2091 16 14 16C11.7909 16 10 17.7909 10 20C10 22.2091 11.7909 24 14 24Z'
					stroke='#009990'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M32 7H44L40 3'
					stroke='#00FFF0'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M36 13H24L28 17'
					stroke='#00FFF0'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</svg>
		),
	});
};

export default _SVGImageConvert;
