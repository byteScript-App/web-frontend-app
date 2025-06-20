import { FC } from 'react';

import { useSpriteSVGHoverState } from '@/shared/hooks';
import { SpriteIconVariant, cls, processSpriteIcons } from '@/shared/utils';

import { SpriteIconsProps } from '../types';
import styles from './SpriteIcons.module.scss';

const _SVGGzip: FC<SpriteIconsProps> = ({
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
					d='M26 14L23.7689 9.53783C23.1268 8.25359 22.8057 7.61146 22.3267 7.14233C21.9032 6.72746 21.3926 6.41195 20.8321 6.21862C20.1983 6 19.4804 6 18.0446 6H10.4C8.15979 6 7.03968 6 6.18404 6.43597C5.43139 6.81947 4.81947 7.43139 4.43597 8.18404C4 9.03968 4 10.1598 4 12.4V14'
					stroke='#404342'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M4 14H34.4C37.7603 14 39.4405 14 40.7239 14.654C41.8529 15.2292 42.7708 16.1471 43.346 17.2761C44 18.5595 44 20.2397 44 23.6V32.4C44 35.7603 44 37.4405 43.346 38.7239C42.7708 39.8529 41.8529 40.7708 40.7239 41.346C39.4405 42 37.7603 42 34.4 42H13.6C10.2397 42 8.55953 42 7.27606 41.346C6.14708 40.7708 5.2292 39.8529 4.65396 38.7239C4 37.4405 4 35.7603 4 32.4V14Z'
					stroke='#404342'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M34 42V22'
					stroke='#D89126'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M31 21L33 15H35L37 21H31Z'
					stroke='#D89126'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M30 32H35'
					stroke='#D89126'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M30 26H35'
					stroke='#D89126'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M30 38H35'
					stroke='#D89126'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M33 35H38'
					stroke='#D89126'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M33 29H38'
					stroke='#D89126'
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
					d='M26 14L23.7689 9.53783C23.1268 8.25359 22.8057 7.61146 22.3267 7.14233C21.9032 6.72746 21.3926 6.41195 20.8321 6.21862C20.1983 6 19.4804 6 18.0446 6H10.4C8.15979 6 7.03968 6 6.18404 6.43597C5.43139 6.81947 4.81947 7.43139 4.43597 8.18404C4 9.03968 4 10.1598 4 12.4V14'
					stroke='#009990'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M4 14H34.4C37.7603 14 39.4405 14 40.7239 14.654C41.8529 15.2292 42.7708 16.1471 43.346 17.2761C44 18.5595 44 20.2397 44 23.6V32.4C44 35.7603 44 37.4405 43.346 38.7239C42.7708 39.8529 41.8529 40.7708 40.7239 41.346C39.4405 42 37.7603 42 34.4 42H13.6C10.2397 42 8.55953 42 7.27606 41.346C6.14708 40.7708 5.2292 39.8529 4.65396 38.7239C4 37.4405 4 35.7603 4 32.4V14Z'
					stroke='#009990'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M34 42V22'
					stroke='#00FFF0'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M31 21L33 15H35L37 21H31Z'
					stroke='#00FFF0'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M30 32H35'
					stroke='#00FFF0'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M30 26H35'
					stroke='#00FFF0'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M30 38H35'
					stroke='#00FFF0'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M33 35H38'
					stroke='#00FFF0'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M33 29H38'
					stroke='#00FFF0'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</svg>
		),
	});
};

export default _SVGGzip;
