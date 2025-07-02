import { IconsDefaultSize, IconsProps } from '@/shared/UI';
import { cls } from '@/shared/utils';

import styles from './Icons.module.scss';

const _SVGEye = ({
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
			<path d='M2.41972 12.7132C2.28353 12.4975 2.21544 12.3897 2.17732 12.2234C2.14869 12.0985 2.14869 11.9015 2.17732 11.7766C2.21544 11.6103 2.28353 11.5025 2.41972 11.2868C3.54513 9.50484 6.895 5 12 5C17.105 5 20.4549 9.50484 21.5803 11.2868C21.7165 11.5025 21.7846 11.6103 21.8227 11.7766C21.8513 11.9015 21.8513 12.0985 21.8227 12.2234C21.7846 12.3897 21.7165 12.4975 21.5803 12.7132C20.4549 14.4952 17.105 19 12 19C6.895 19 3.54513 14.4952 2.41972 12.7132Z' />
			<path d='M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z' />
		</svg>
	);
};

export default _SVGEye;
