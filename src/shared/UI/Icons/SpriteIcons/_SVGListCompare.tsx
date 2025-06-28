import { SpriteIconsDefaultSize } from '@/shared/UI';
import { useSpriteSVGHoverState } from '@/shared/hooks';
import { SpriteIconVariant, cls, processSpriteIcons } from '@/shared/utils';

import { SpriteIconsProps } from '../types';

import styles from './SpriteIcons.module.scss';

const _SVGListCompare = ({
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
				<path d='M18 16H10' stroke='#404342' />
				<path d='M38 16H30' stroke='#D42E22' />
				<path d='M14 22H10' stroke='#404342' />
				<path d='M38 22H30' stroke='#D42E22' />
				<path d='M18 10H10' stroke='#404342' />
				<path d='M38 10H30' stroke='#D42E22' />
				<path d='M24 38V10' stroke='#404342' />
				<path
					d='M34.4 4H13.6C10.2397 4 8.55953 4 7.27606 4.65396C6.14708 5.2292 5.2292 6.14708 4.65396 7.27606C4 8.55953 4 10.2397 4 13.6V34.4C4 37.7603 4 39.4405 4.65396 40.7239C5.2292 41.8529 6.14708 42.7708 7.27606 43.346C8.55953 44 10.2397 44 13.6 44H34.4C37.7603 44 39.4405 44 40.7239 43.346C41.8529 42.7708 42.7708 41.8529 43.346 40.7239C44 39.4405 44 37.7603 44 34.4V13.6C44 10.2397 44 8.55953 43.346 7.27606C42.7708 6.14708 41.8529 5.2292 40.7239 4.65396C39.4405 4 37.7603 4 34.4 4Z'
					stroke='#404342'
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
				<path d='M18 16H10' stroke='#009990' />
				<path d='M38 16H30' stroke='#00FFF0' />
				<path d='M14 22H10' stroke='#009990' />
				<path d='M38 22H30' stroke='#00FFF0' />
				<path d='M18 10H10' stroke='#009990' />
				<path d='M38 10H30' stroke='#00FFF0' />
				<path d='M24 38V10' stroke='#009990' />
				<path
					d='M34.4 4H13.6C10.2397 4 8.55953 4 7.27606 4.65396C6.14708 5.2292 5.2292 6.14708 4.65396 7.27606C4 8.55953 4 10.2397 4 13.6V34.4C4 37.7603 4 39.4405 4.65396 40.7239C5.2292 41.8529 6.14708 42.7708 7.27606 43.346C8.55953 44 10.2397 44 13.6 44H34.4C37.7603 44 39.4405 44 40.7239 43.346C41.8529 42.7708 42.7708 41.8529 43.346 40.7239C44 39.4405 44 37.7603 44 34.4V13.6C44 10.2397 44 8.55953 43.346 7.27606C42.7708 6.14708 41.8529 5.2292 40.7239 4.65396C39.4405 4 37.7603 4 34.4 4Z'
					stroke='#009990'
				/>
			</svg>
		),
	});
};

export default _SVGListCompare;
