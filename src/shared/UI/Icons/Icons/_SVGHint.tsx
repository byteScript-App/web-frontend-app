import { IconsDefaultSize, IconsProps } from '@/shared/UI';
import { cls } from '@/shared/utils';

import styles from './Icons.module.scss';

const _SvgHint = ({
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
			<path d='M10 22H14' />
			<path d='M15 15.3264C17.3649 14.2029 19 11.7924 19 9C19 5.13401 15.866 2 12 2C8.13401 2 5 5.13401 5 9C5 11.7924 6.63505 14.2029 9 15.3264V16C9 16.9319 9 17.3978 9.15224 17.7654C9.35523 18.2554 9.74458 18.6448 10.2346 18.8478C10.6022 19 11.0681 19 12 19V19C12.9319 19 13.3978 19 13.7654 18.8478C14.2554 18.6448 14.6448 18.2554 14.8478 17.7654C15 17.3978 15 16.9319 15 16V15.3264Z' />
			<path d='M12 6L11 9H13L12 12' />
		</svg>
	);
};

export default _SvgHint;
