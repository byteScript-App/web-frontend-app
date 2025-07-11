import { SpriteIconsDefaultSize } from '@/shared/UI';
import { useSpriteSVGHoverState } from '@/shared/hooks';
import { SpriteIconVariant, cls, processSpriteIcons } from '@/shared/utils';

import { SpriteIconsProps } from '../types';

import styles from './SpriteIcons.module.scss';

const _SVGBase64Text = ({
	width = SpriteIconsDefaultSize.w,
	lineHeight = SpriteIconsDefaultSize.h,
	hoverEffect = true,
	className,
}: SpriteIconsProps) => {
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
				<path d='M46 38H38L44 30V42' stroke='#0FA84B' strokeMiterlimit='10' />
				<path
					d='M30.0001 30C30.0001 30 23.9997 30 24.0003 37M32.0001 38C32.0001 40.2601 30.2093 42 28.0001 42C25.791 42 24 40.2601 24 38C24 35.7399 25.791 34 28.0001 34C30.2093 34 32.0001 35.7399 32.0001 38Z'
					stroke='#0FA84B'
					strokeMiterlimit='10'
				/>
				<path
					d='M36 22V13.6C36 10.2397 36 8.55953 35.346 7.27606C34.7708 6.14708 33.8529 5.2292 32.7239 4.65396C31.4405 4 29.7603 4 26.4 4H13.6C10.2397 4 8.55953 4 7.27606 4.65396C6.14708 5.2292 5.2292 6.14708 4.65396 7.27606C4 8.55953 4 10.2397 4 13.6V34.4C4 37.7603 4 39.4405 4.65396 40.7239C5.2292 41.8529 6.14708 42.7708 7.27606 43.346C8.55953 44 10.2395 44 13.5996 44C14.3941 44 15.1997 44 16 44'
					stroke='#404342'
				/>
				<path d='M24 22H12' stroke='#404342' />
				<path d='M16 30H12' stroke='#404342' />
				<path d='M28 14H12' stroke='#404342' />
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
				<path d='M46 38H38L44 30V42' stroke='#00FFF0' strokeMiterlimit='10' />
				<path
					d='M30.0001 30C30.0001 30 23.9997 30 24.0003 37M32.0001 38C32.0001 40.2601 30.2093 42 28.0001 42C25.791 42 24 40.2601 24 38C24 35.7399 25.791 34 28.0001 34C30.2093 34 32.0001 35.7399 32.0001 38Z'
					stroke='#00FFF0'
					strokeMiterlimit='10'
				/>
				<path
					d='M36 22V13.6C36 10.2397 36 8.55953 35.346 7.27606C34.7708 6.14708 33.8529 5.2292 32.7239 4.65396C31.4405 4 29.7603 4 26.4 4H13.6C10.2397 4 8.55953 4 7.27606 4.65396C6.14708 5.2292 5.2292 6.14708 4.65396 7.27606C4 8.55953 4 10.2397 4 13.6V34.4C4 37.7603 4 39.4405 4.65396 40.7239C5.2292 41.8529 6.14708 42.7708 7.27606 43.346C8.55953 44 10.2395 44 13.5996 44C14.3941 44 15.1997 44 16 44'
					stroke='#009990'
				/>
				<path d='M24 22H12' stroke='#009990' />
				<path d='M16 30H12' stroke='#009990' />
				<path d='M28 14H12' stroke='#009990' />
			</svg>
		),
	});
};

export default _SVGBase64Text;
