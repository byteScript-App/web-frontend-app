import { FC } from 'react';

import { useSpriteSVGHoverState } from '@/shared/hooks';
import { SpriteIconVariant, processSpriteIcons } from '@/shared/utils';

import { SpriteIconsProps } from '../types';

const _SVGJWT: FC<SpriteIconsProps> = ({
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
				className={className}
				onMouseEnter={() => onHover(SpriteIconVariant.ACTIVE)}
				onMouseLeave={() => onHover(SpriteIconVariant.DEFAULT)}
				viewBox='0 0 48 48'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M22 12V2H26V12L24 16L22 12Z'
					stroke='#000403'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M26 46H22V36L24 32L26 36V46Z'
					stroke='#000403'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M22 12V2H26V12L24 16L22 12Z'
					stroke='#404342'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M26 46H22V36L24 32L26 36V46Z'
					stroke='#404342'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M15.329 15.4671L9.45117 7.37695L12.6872 5.02581L18.5651 13.116L19.2982 17.5276L15.329 15.4671Z'
					stroke='#00FFF0'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M38.5498 40.6226L35.3137 42.9737L29.4359 34.8835L28.7028 30.4719L32.6719 32.5324L38.5498 40.6226Z'
					stroke='#00FFF0'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M11.9695 22.1937L2.45898 19.1035L3.69505 15.2993L13.2056 18.3895L16.3918 21.5276L11.9695 22.1937Z'
					stroke='#05A8F2'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M45.5415 28.896L44.3055 32.7003L34.7949 29.6101L31.6087 26.4719L36.031 25.8059L45.5415 28.896Z'
					stroke='#05A8F2'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M29.4356 13.1165L35.3135 5.02637L38.5495 7.37751L32.6717 15.4677L28.7025 17.5282L29.4356 13.1165Z'
					stroke='#D42E22'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M12.687 42.9743L9.45092 40.6231L15.3288 32.5329L19.298 30.4724L18.5648 34.8841L12.687 42.9743Z'
					stroke='#D42E22'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M34.7956 18.39L44.3062 15.2998L45.5422 19.104L36.0317 22.1942L31.6094 21.5282L34.7956 18.39Z'
					stroke='#562BBA'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M3.69574 32.7008L2.45967 28.8966L11.9702 25.8064L16.3925 26.4724L13.2063 29.6106L3.69574 32.7008Z'
					stroke='#562BBA'
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
				className={className}
				onMouseEnter={() => onHover(SpriteIconVariant.ACTIVE)}
				onMouseLeave={() => onHover(SpriteIconVariant.DEFAULT)}
				viewBox='0 0 48 48'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M22 12V2H26V12L24 16L22 12Z'
					stroke='#000403'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M26 46H22V36L24 32L26 36V46Z'
					stroke='#000403'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M22 12V2H26V12L24 16L22 12Z'
					stroke='#009990'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M26 46H22V36L24 32L26 36V46Z'
					stroke='#009990'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M15.329 15.4671L9.45117 7.37695L12.6872 5.02581L18.5651 13.116L19.2982 17.5276L15.329 15.4671Z'
					stroke='#00FFF0'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M38.5498 40.6226L35.3137 42.9737L29.4359 34.8835L28.7028 30.4719L32.6719 32.5324L38.5498 40.6226Z'
					stroke='#00FFF0'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M11.9695 22.1937L2.45898 19.1035L3.69505 15.2993L13.2056 18.3895L16.3918 21.5276L11.9695 22.1937Z'
					stroke='#009990'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M45.5415 28.896L44.3055 32.7003L34.7949 29.6101L31.6087 26.4719L36.031 25.8059L45.5415 28.896Z'
					stroke='#009990'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M29.4356 13.1165L35.3135 5.02637L38.5495 7.37751L32.6717 15.4677L28.7025 17.5282L29.4356 13.1165Z'
					stroke='#009990'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M12.687 42.9743L9.45092 40.6231L15.3288 32.5329L19.298 30.4724L18.5648 34.8841L12.687 42.9743Z'
					stroke='#009990'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M34.7956 18.39L44.3062 15.2998L45.5422 19.104L36.0317 22.1942L31.6094 21.5282L34.7956 18.39Z'
					stroke='#009990'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M3.69574 32.7008L2.45967 28.8966L11.9702 25.8064L16.3925 26.4724L13.2063 29.6106L3.69574 32.7008Z'
					stroke='#009990'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</svg>
		),
	});
};

export default _SVGJWT;
