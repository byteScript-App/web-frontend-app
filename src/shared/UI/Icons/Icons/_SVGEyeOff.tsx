import { IconsDefaultSize, IconsProps } from '@/shared/UI';
import { cls } from '@/shared/utils';

import styles from './Icons.module.scss';

const _SVGEyeOff = ({
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
			<path d='M10.7427 5.09232C11.1491 5.03223 11.5683 5 12.0001 5C17.1052 5 20.455 9.50484 21.5804 11.2868C21.7166 11.5025 21.7847 11.6103 21.8229 11.7767C21.8515 11.9016 21.8515 12.0987 21.8228 12.2236C21.7847 12.3899 21.7161 12.4985 21.5789 12.7156C21.2791 13.1901 20.8219 13.8571 20.2162 14.5805' />
			<path d='M6.72391 6.71484C4.56183 8.18151 3.09403 10.2192 2.42069 11.2851C2.28387 11.5017 2.21546 11.61 2.17732 11.7763C2.14868 11.9012 2.14867 12.0982 2.1773 12.2232C2.21541 12.3895 2.28352 12.4973 2.41972 12.713C3.54513 14.495 6.895 18.9998 12 18.9998C14.0584 18.9998 15.8315 18.2674 17.2884 17.2764' />
			<path d='M3 3L21 21' />
			<path d='M9.87868 9.87891C9.33579 10.4218 9 11.1718 9 12.0002C9 13.6571 10.3431 15.0002 12 15.0002C12.8284 15.0002 13.5784 14.6644 14.1213 14.1215' />
		</svg>
	);
};

export default _SVGEyeOff;
