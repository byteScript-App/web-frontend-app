import { FC } from 'react';

import { useSpriteSVGHoverState } from '@/shared/hooks';
import { SpriteIconVariant, cls, processSpriteIcons } from '@/shared/utils';

import { SpriteIconsProps } from '../types';
import styles from './SpriteIcons.module.scss';

const _SVGJsonYaml: FC<SpriteIconsProps> = ({
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
				className={cls(styles.spriteIcons, className)}
				onMouseEnter={() => onHover(SpriteIconVariant.ACTIVE)}
				onMouseLeave={() => onHover(SpriteIconVariant.DEFAULT)}
				viewBox='0 0 48 48'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M37 40C39.524 40 42 37.954 42 35.428V26L43.9996 24L42 22V12.572C42 10.046 39.526 8 37 8M37 40L39 38M37 40L39 42'
					stroke='#404342'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M11 8C8.474 8 6 10.046 6 12.572V22L4 24L6 26V35.428C6 37.954 8.474 40 11 40M11 8L9 6M11 8L9 10'
					stroke='#404342'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M29 25V33H34M21 22L22 20M22 20L25 14L28 20M22 20H28M28 20L29 22M14 14L18 19M18 19L22 14M18 19V22M18 33V25L22 30.5L26 25V33'
					stroke='#D42E22'
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
				className={cls(styles.spriteIcons, className)}
				onMouseEnter={() => onHover(SpriteIconVariant.ACTIVE)}
				onMouseLeave={() => onHover(SpriteIconVariant.DEFAULT)}
				viewBox='0 0 48 48'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M11 8C8.474 8 6 10.046 6 12.572V22L4 24L6 26V35.428C6 37.954 8.474 40 11 40M11 8L9 6M11 8L9 10'
					stroke='#009990'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M29 25V33H34M21 22L22 20M22 20L25 14L28 20M22 20H28M28 20L29 22M14 14L18 19M18 19L22 14M18 19V22M18 33V25L22 30.5L26 25V33'
					stroke='#00FFF0'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M37 40C39.524 40 42 37.954 42 35.428V26L43.9996 24L42 22V12.572C42 10.046 39.526 8 37 8M37 40L39 38M37 40L39 42'
					stroke='#009990'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</svg>
		),
	});
};

export default _SVGJsonYaml;
