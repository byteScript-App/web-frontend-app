import { SpriteIconsDefaultSize } from '@/shared/UI';
import { useSpriteSVGHoverState } from '@/shared/hooks';
import { SpriteIconVariant, cls, processSpriteIcons } from '@/shared/utils';

import { SpriteIconsProps } from '../types';

import styles from './SpriteIcons.module.scss';

const _SVGRegexTest = ({
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
					d='M39.812 42C42.4926 36.5777 43.9999 30.4658 43.9999 24C43.9999 17.5342 42.4926 11.4223 39.812 6'
					stroke='#404342'
				/>
				<path
					d='M8.18786 6C5.50727 11.4223 4 17.5342 4 24C4 30.4658 5.50727 36.5777 8.18786 42'
					stroke='#404342'
				/>
				<path d='M28 9V23' stroke='#D42E22' />
				<path d='M34 12L22 20' stroke='#D42E22' />
				<path d='M34 20L22 12' stroke='#D42E22' />
				<circle cx='18' cy='36' r='2' stroke='#404342' />
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
					d='M39.812 42C42.4926 36.5777 43.9999 30.4658 43.9999 24C43.9999 17.5342 42.4926 11.4223 39.812 6'
					stroke='#009990'
				/>
				<path
					d='M8.18786 6C5.50727 11.4223 4 17.5342 4 24C4 30.4658 5.50727 36.5777 8.18786 42'
					stroke='#009990'
				/>
				<path d='M28 9V23' stroke='#00FFF0' />
				<path d='M34 12L22 20' stroke='#00FFF0' />
				<path d='M34 20L22 12' stroke='#00FFF0' />
				<circle cx='18' cy='36' r='2' stroke='#009990' />
			</svg>
		),
	});
};

export default _SVGRegexTest;
