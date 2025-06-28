import { IconLoaderProps, IconsDefaultSize } from '@/shared/UI';
import { cls } from '@/shared/utils';

import styles from './Icons.module.scss';

const _SVGLoader = ({
	width = IconsDefaultSize.w,
	lineHeight = IconsDefaultSize.h,
	spin = true,
	color,
	className,
}: IconLoaderProps) => {
	return (
		<svg
			width={width}
			height={lineHeight}
			className={cls(styles.icon, color && styles[color], spin && styles.loader, className)}
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path className={styles.s1} d='M12 2 L12 5' transform='rotate(0 12 12)' />
			<path className={styles.s2} d='M12 2 L12 5' transform='rotate(45 12 12)' />
			<path className={styles.s3} d='M12 2 L12 5' transform='rotate(90 12 12)' />
			<path className={styles.s4} d='M12 2 L12 5' transform='rotate(135 12 12)' />
			<path className={styles.s5} d='M12 2 L12 5' transform='rotate(180 12 12)' />
			<path className={styles.s6} d='M12 2 L12 5' transform='rotate(225 12 12)' />
			<path className={styles.s7} d='M12 2 L12 5' transform='rotate(270 12 12)' />
			<path className={styles.s8} d='M12 2 L12 5' transform='rotate(315 12 12)' />
		</svg>
	);
};

export default _SVGLoader;
