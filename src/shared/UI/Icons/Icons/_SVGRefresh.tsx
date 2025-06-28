import { IconsDefaultSize, IconsProps } from '@/shared/UI';
import { cls } from '@/shared/utils';

import styles from './Icons.module.scss';

const _SVGRefresh = ({
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
			<path
				d='M20.4531 12.893C20.1753 15.5029 18.6965 17.9486 16.2495 19.3614C12.1841 21.7086 6.98554 20.3157 4.63833 16.2502L4.38833 15.8172'
				stroke='#B6BBBB'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M3.54653 11.1071C3.82434 8.49717 5.30313 6.05144 7.75011 4.63867C11.8156 2.29146 17.0141 3.6844 19.3613 7.74989L19.6113 8.1829'
				stroke='#B6BBBB'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M3.49342 18.066L4.22547 15.334L6.95752 16.066'
				stroke='#B6BBBB'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M17.0427 7.93359L19.7748 8.66564L20.5068 5.93359'
				stroke='#B6BBBB'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
};

export default _SVGRefresh;
