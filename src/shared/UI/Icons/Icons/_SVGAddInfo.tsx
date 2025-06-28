import { IconsDefaultSize, IconsProps } from '@/shared/UI';
import { cls } from '@/shared/utils';

import styles from './Icons.module.scss';

const _SVGAddInfo = ({
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
			<rect x='3' y='3' width='18' height='18' rx='3' />
			<path d='M12 16V12' />
			<path d='M12 8H12.01' />
		</svg>
	);
};

export default _SVGAddInfo;
