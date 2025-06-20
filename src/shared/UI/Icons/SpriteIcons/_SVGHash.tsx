import { SpriteIconsDefaultSize } from '@/shared/UI';
import { useSpriteSVGHoverState } from '@/shared/hooks';
import { SpriteIconVariant, cls, processSpriteIcons } from '@/shared/utils';

import { SpriteIconsProps } from '../types';

import styles from './SpriteIcons.module.scss';

const _SVGHash = ({
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
					d='M11.6138 37.0607C11.6492 37.0011 11.6855 36.9417 11.7226 36.8827C14.4316 32.5763 15.9998 27.4835 15.9998 22C15.9998 17.5817 19.5815 14 23.9998 14C28.4181 14 31.9998 17.5817 31.9998 22C31.9998 24.0341 31.8613 26.0372 31.5933 28M27.3584 41.6872C28.5818 39.2452 29.5848 36.6738 30.3414 34'
					stroke='#F2FAF9'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M38.0193 36.2639C39.3094 31.7314 40 26.9463 40 22C40 13.1634 32.8366 6 24 6C21.0857 6 18.3534 6.77915 16 8.14052M6 30.7283C7.28132 28.0907 8 25.1293 8 22C8 19.0857 8.77915 16.3534 10.1405 14'
					stroke='#404342'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M23.9997 22C23.9997 29.0344 21.9822 35.5976 18.4941 41.1424'
					stroke='#404342'
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
					d='M11.6138 37.0607C11.6492 37.0011 11.6855 36.9417 11.7226 36.8827C14.4316 32.5763 15.9998 27.4835 15.9998 22C15.9998 17.5817 19.5815 14 23.9998 14C28.4181 14 31.9998 17.5817 31.9998 22C31.9998 24.0341 31.8613 26.0372 31.5933 28M27.3584 41.6872C28.5818 39.2452 29.5848 36.6738 30.3414 34'
					stroke='#00FFF0'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M38.0193 36.2639C39.3094 31.7314 40 26.9463 40 22C40 13.1634 32.8366 6 24 6C21.0857 6 18.3534 6.77915 16 8.14052M6 30.7283C7.28132 28.0907 8 25.1293 8 22C8 19.0857 8.77915 16.3534 10.1405 14'
					stroke='#009990'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M23.9997 22C23.9997 29.0344 21.9822 35.5976 18.4941 41.1424'
					stroke='#009990'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</svg>
		),
	});
};

export default _SVGHash;
