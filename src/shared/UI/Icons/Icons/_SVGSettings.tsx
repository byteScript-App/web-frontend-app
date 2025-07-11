import { IconsDefaultSize, IconsProps } from '@/shared/UI';
import { cls } from '@/shared/utils';

import styles from './Icons.module.scss';

const _SVGSettings = ({
	width = IconsDefaultSize.w,
	lineHeight = IconsDefaultSize.h,
	color,
	className,
}: IconsProps) => {
	return (
		<svg
			width={width}
			height={lineHeight}
			className={cls(styles.icon, color && styles[color], className)}
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path d='M3 8L15 8' />
			<path d='M9 16L21 16' />
			<path d='M18 11C19.6569 11 21 9.65685 21 8C21 6.34315 19.6569 5 18 5C16.3431 5 15 6.34315 15 8C15 9.65685 16.3431 11 18 11Z' />
			<path d='M6 19C7.65685 19 9 17.6569 9 16C9 14.3431 7.65685 13 6 13C4.34315 13 3 14.3431 3 16C3 17.6569 4.34315 19 6 19Z' />
		</svg>
	);
};

export default _SVGSettings;
