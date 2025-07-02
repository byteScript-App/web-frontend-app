import { IconsDefaultSize, IconsProps } from '@/shared/UI';
import { cls } from '@/shared/utils';

import styles from './Icons.module.scss';

const _SVGFlagFilled = ({
	width = IconsDefaultSize.w,
	lineHeight = IconsDefaultSize.h,
	color,
	className,
}: IconsProps) => {
	return (
		<svg
			width={width}
			height={lineHeight}
			className={cls(styles.icon, styles.filled, color && styles[color], className)}
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path d='M8 14C5 14 4 15 4 15V4C4 4 5 3 8 3C11 3 13 5 16 5C19 5 20 4 20 4V15C20 15 19 16 16 16C13 16 11 14 8 14Z' />
			<path d='M4 22L4 2' />
		</svg>
	);
};

export default _SVGFlagFilled;
