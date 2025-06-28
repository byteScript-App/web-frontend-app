import { SpriteIconsDefaultSize } from '@/shared/UI';
import { useSpriteSVGHoverState } from '@/shared/hooks';
import { SpriteIconVariant, cls, processSpriteIcons } from '@/shared/utils';

import { SpriteIconsProps } from '../types';

import styles from './SpriteIcons.module.scss';

const _SVGUrl = ({
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
				<path d='M18 30L30 18' stroke='#0FA84B' />
				<path
					d='M26 36L23 39C19.134 42.866 12.866 42.866 9 39V39C5.13401 35.134 5.13401 28.866 9 25L12 22'
					stroke='#404342'
				/>
				<path
					d='M36 26L39 23C42.866 19.134 42.866 12.866 39 9V9C35.134 5.13401 28.866 5.13401 25 9L22 12'
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
				<path d='M18 30L30 18' stroke='#00FFF0' />
				<path
					d='M26 36L23 39C19.134 42.866 12.866 42.866 9 39V39C5.13401 35.134 5.13401 28.866 9 25L12 22'
					stroke='#009990'
				/>
				<path
					d='M36 26L39 23C42.866 19.134 42.866 12.866 39 9V9C35.134 5.13401 28.866 5.13401 25 9L22 12'
					stroke='#009990'
				/>
			</svg>
		),
	});
};

export default _SVGUrl;
