import { SpriteIconsDefaultSize } from '@/shared/UI';
import { useSpriteSVGHoverState } from '@/shared/hooks';
import { SpriteIconVariant, cls, processSpriteIcons } from '@/shared/utils';

import { SpriteIconsProps } from '../types';

import styles from './SpriteIcons.module.scss';

const _SVGHtml = ({
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
				<path d='M44 4H4L8 42L24 46L40 42L44 4Z' stroke='#404342' />
				<path d='M35 12H13L14 22H34L32.5 36L24 38L15.75 36L15.5 34' stroke='#D89126' />
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
				<path d='M44 4H4L8 42L24 46L40 42L44 4Z' stroke='#009990' />
				<path d='M35 12H13L14 22H34L32.5 36L24 38L15.75 36L15.5 34' stroke='#00FFF0' />
			</svg>
		),
	});
};

export default _SVGHtml;
