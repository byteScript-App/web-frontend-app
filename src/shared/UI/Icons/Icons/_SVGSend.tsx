import { IconsDefaultSize, IconsProps } from '@/shared/UI';
import { cls } from '@/shared/utils';

import styles from './Icons.module.scss';

const _SVGSend = ({
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
			<path d='M10 12H5' />
			<path d='M2.57395 4.72922C2.39247 4.18247 2.30174 3.90909 2.36778 3.7407C2.42514 3.59445 2.54789 3.48367 2.69923 3.44156C2.87349 3.39307 3.13616 3.51127 3.66151 3.74767L20.3788 11.2704C20.8931 11.5019 21.1503 11.6176 21.2298 11.7783C21.2988 11.918 21.2988 12.0819 21.2298 12.2216C21.1503 12.3823 20.8931 12.498 20.3788 12.7295L3.66733 20.2496C3.1404 20.4868 2.87693 20.6053 2.7025 20.5566C2.55102 20.5144 2.42825 20.4033 2.37109 20.2568C2.30527 20.0881 2.39699 19.8141 2.58042 19.2661L4.91534 12.2915C4.94675 12.1976 4.96246 12.1507 4.96873 12.1027C4.9743 12.0601 4.97436 12.017 4.9689 11.9744C4.96275 11.9263 4.94716 11.8794 4.91599 11.7855L2.57395 4.72922Z' />
		</svg>
	);
};

export default _SVGSend;
