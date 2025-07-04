import { SpriteIconsDefaultSize } from '@/shared/UI';
import { useSpriteSVGHoverState } from '@/shared/hooks';
import { SpriteIconVariant, cls, processSpriteIcons } from '@/shared/utils';

import { SpriteIconsProps } from '../types';

import styles from './SpriteIcons.module.scss';

const _SVGTimestampConvert = ({
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
				<path d='M24 4V8' stroke='#404342' />
				<path d='M24 40V44' stroke='#404342' />
				<path d='M8 24L4 24' stroke='#404342' />
				<path d='M12.6282 12.6282L9.7998 9.7998' stroke='#404342' />
				<path d='M35.3716 12.6282L38.2 9.7998' stroke='#404342' />
				<path d='M12.6282 35.3799L9.7998 38.2083' stroke='#404342' />
				<path d='M35.3716 35.3799L38.2 38.2083' stroke='#404342' />
				<path d='M44 24L40 24' stroke='#404342' />
				<path
					d='M24 34C29.5228 34 34 29.5228 34 24C34 18.4772 29.5228 14 24 14C18.4772 14 14 18.4772 14 24C14 29.5228 18.4772 34 24 34Z'
					stroke='#404342'
				/>
				<path d='M24 20V24L26 26' stroke='#05A8F2' />
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
				<path d='M24 4V8' stroke='#009990' />
				<path d='M24 40V44' stroke='#009990' />
				<path d='M8 24L4 24' stroke='#009990' />
				<path d='M12.6282 12.6282L9.7998 9.7998' stroke='#009990' />
				<path d='M35.3716 12.6282L38.2 9.7998' stroke='#009990' />
				<path d='M12.6282 35.3799L9.7998 38.2083' stroke='#009990' />
				<path d='M35.3716 35.3799L38.2 38.2083' stroke='#009990' />
				<path d='M44 24L40 24' stroke='#009990' />
				<path
					d='M24 34C29.5228 34 34 29.5228 34 24C34 18.4772 29.5228 14 24 14C18.4772 14 14 18.4772 14 24C14 29.5228 18.4772 34 24 34Z'
					stroke='#009990'
				/>
				<path d='M24 20V24L26 26' stroke='#00FFF0' />
			</svg>
		),
	});
};

export default _SVGTimestampConvert;
