import { IconsDefaultSize, IconsWithPositionProps } from '@/shared/UI';
import { cls } from '@/shared/utils';

import styles from './Icons.module.scss';

const _SVGArrow = ({
	width = IconsDefaultSize.w,
	lineHeight = IconsDefaultSize.h,
	position = 'right',
	color,
	className,
}: IconsWithPositionProps) => {
	return (
		<svg
			width={width}
			height={lineHeight}
			className={cls(styles.icon, color && styles[color], styles[position], className)}
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path d='M4 12H20' />
			<path d='M16 8L20 12L16 16' />
		</svg>
	);
};

export default _SVGArrow;
