import { IconsDefaultSize, IconsProps } from '@/shared/UI';
import { cls } from '@/shared/utils';

import styles from './Icons.module.scss';

const _SVGTrash = ({
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
				d='M9 3H15'
				stroke='#B6BBBB'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M3 6H21'
				stroke='#B6BBBB'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M5 6L5.70129 16.5193C5.8065 18.0975 5.85911 18.8867 6.19998 19.485C6.50009 20.0118 6.95276 20.4353 7.49834 20.6997C8.11803 21 8.90891 21 10.4907 21H13.5093C15.0911 21 15.882 21 16.5017 20.6997C17.0472 20.4353 17.4999 20.0118 17.8 19.485C18.1409 18.8867 18.1935 18.0975 18.2987 16.5193L19 6'
				stroke='#B6BBBB'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M10 10.5V15.5'
				stroke='#B6BBBB'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M14 10.5V15.5'
				stroke='#B6BBBB'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
};

export default _SVGTrash;
