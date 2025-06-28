import { IconsDefaultSize, IconsProps } from '@/shared/UI';
import { cls } from '@/shared/utils';

import styles from './Icons.module.scss';

const _SvgPlus = ({
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
			<path d='M12 5V19M5 12H19' />
		</svg>
	);
};

export default _SvgPlus;
