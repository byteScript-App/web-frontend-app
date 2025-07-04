import { SpriteIconsDefaultSize } from '@/shared/UI';
import { useSpriteSVGHoverState } from '@/shared/hooks';
import { SpriteIconVariant, cls, processSpriteIcons } from '@/shared/utils';

import { SpriteIconsProps } from '../types';

import styles from './SpriteIcons.module.scss';

const _SVGUuidGenerate = ({
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
				<path
					d='M8 8V14C8 17.3137 10.6863 20 14 20V20C17.3137 20 20 17.3137 20 14V8'
					stroke='#404342'
				/>
				<path d='M14 26V38M14 26H18M14 26H10M14 38H18M14 38H10' stroke='#562BBA' />
				<path
					d='M32 26L26 26L26 38L32 38C35.3137 38 38 35.3137 38 32C38 28.6863 35.3137 26 32 26Z'
					stroke='#562BBA'
				/>
				<path
					d='M26 8V14C26 17.3137 28.6863 20 32 20V20C35.3137 20 38 17.3137 38 14V8'
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
				<path
					d='M18 8L14 8C10.6863 8 8 10.6863 8 14V14C8 17.3137 10.6863 20 14 20L17 20C18.6569 20 20 18.6569 20 17V17C20 15.3431 18.6569 14 17 14L14 14'
					stroke='#00FFF0'
				/>
				<path d='M14 26V38M14 26H18M14 26H10M14 38H18M14 38H10' stroke='#009990' />
				<path
					d='M32 26L26 26L26 38L32 38C35.3137 38 38 35.3137 38 32C38 28.6863 35.3137 26 32 26Z'
					stroke='#009990'
				/>
				<path
					d='M26 8V14C26 17.3137 28.6863 20 32 20V20C35.3137 20 38 17.3137 38 14V8'
					stroke='#009990'
				/>
			</svg>
		),
	});
};

export default _SVGUuidGenerate;
