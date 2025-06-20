import { FC } from 'react';

import { useSpriteSVGHoverState } from '@/shared/hooks';
import { SpriteIconVariant, cls, processSpriteIcons } from '@/shared/utils';

import { SpriteIconsProps } from '../types';
import styles from './SpriteIcons.module.scss';

const _SVGCertificate: FC<SpriteIconsProps> = ({
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
					d='M13 40H10C7.79086 40 6 38.2091 6 36V8C6 5.79086 7.79086 4 10 4H38C40.2091 4 42 5.79086 42 8V36C42 38.2091 40.2091 40 38 40H35'
					stroke='#404342'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M18 12H30'
					stroke='#404342'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M14 19H34'
					stroke='#404342'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M24 38C27.3137 38 30 35.3137 30 32C30 28.6863 27.3137 26 24 26C20.6863 26 18 28.6863 18 32C18 35.3137 20.6863 38 24 38Z'
					stroke='#D89126'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M24.0001 37.9997C24.0144 37.9997 24.0286 37.9997 24.0429 37.9996L17.6573 44.3851L12.0005 38.7283L18.0393 32.6895'
					stroke='#D89126'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M24.0429 37.9997C24.0286 37.9997 24.0143 37.9997 24.0001 37.9996L30.3856 44.3851L36.0425 38.7283L30.0037 32.6895'
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
					d='M13 40H10C7.79086 40 6 38.2091 6 36V8C6 5.79086 7.79086 4 10 4H38C40.2091 4 42 5.79086 42 8V36C42 38.2091 40.2091 40 38 40H35'
					stroke='#009990'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M24 38C27.3137 38 30 35.3137 30 32C30 28.6863 27.3137 26 24 26C20.6863 26 18 28.6863 18 32C18 35.3137 20.6863 38 24 38Z'
					stroke='#00FFF0'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M24.0001 37.9997C24.0144 37.9997 24.0286 37.9997 24.0429 37.9996L17.6573 44.3851L12.0005 38.7283L18.0393 32.6895'
					stroke='#00FFF0'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M24.0429 37.9997C24.0286 37.9997 24.0143 37.9997 24.0001 37.9996L30.3856 44.3851L36.0425 38.7283L30.0037 32.6895'
					stroke='#00FFF0'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M18 12H30'
					stroke='#009990'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M14 19H34'
					stroke='#009990'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</svg>
		),
	});
};

export default _SVGCertificate;
