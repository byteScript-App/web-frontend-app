import { SpriteIconsDefaultSize } from '@/shared/UI';
import { useSpriteSVGHoverState } from '@/shared/hooks';
import { SpriteIconVariant, cls, processSpriteIcons } from '@/shared/utils';

import { SpriteIconsProps } from '../types';

import styles from './SpriteIcons.module.scss';

const _SVGColorPicker = ({
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
					d='M4 24C4 35.0457 12.9543 44 24 44C27.3137 44 30 41.3137 30 38V37C30 36.0712 30 35.6067 30.0513 35.2168C30.4058 32.5244 32.5244 30.4058 35.2168 30.0513C35.6067 30 36.0712 30 37 30H38C41.3137 30 44 27.3137 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24Z'
					stroke='#404342'
				/>
				<path
					d='M14 26C15.1046 26 16 25.1046 16 24C16 22.8954 15.1046 22 14 22C12.8954 22 12 22.8954 12 24C12 25.1046 12.8954 26 14 26Z'
					stroke='#D42E22'
				/>
				<path
					d='M32 18C33.1046 18 34 17.1046 34 16C34 14.8954 33.1046 14 32 14C30.8954 14 30 14.8954 30 16C30 17.1046 30.8954 18 32 18Z'
					stroke='#F2FAF9'
				/>
				<path
					d='M20 16C21.1046 16 22 15.1046 22 14C22 12.8954 21.1046 12 20 12C18.8954 12 18 12.8954 18 14C18 15.1046 18.8954 16 20 16Z'
					stroke='#0FA84B'
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
					d='M4 24C4 35.0457 12.9543 44 24 44C27.3137 44 30 41.3137 30 38V37C30 36.0712 30 35.6067 30.0513 35.2168C30.4058 32.5244 32.5244 30.4058 35.2168 30.0513C35.6067 30 36.0712 30 37 30H38C41.3137 30 44 27.3137 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24Z'
					stroke='#009990'
				/>
				<path
					d='M14 26C15.1046 26 16 25.1046 16 24C16 22.8954 15.1046 22 14 22C12.8954 22 12 22.8954 12 24C12 25.1046 12.8954 26 14 26Z'
					stroke='#00FFF0'
				/>
				<path
					d='M32 18C33.1046 18 34 17.1046 34 16C34 14.8954 33.1046 14 32 14C30.8954 14 30 14.8954 30 16C30 17.1046 30.8954 18 32 18Z'
					stroke='#00FFF0'
				/>
				<path
					d='M20 16C21.1046 16 22 15.1046 22 14C22 12.8954 21.1046 12 20 12C18.8954 12 18 12.8954 18 14C18 15.1046 18.8954 16 20 16Z'
					stroke='#00FFF0'
				/>
			</svg>
		),
	});
};

export default _SVGColorPicker;
