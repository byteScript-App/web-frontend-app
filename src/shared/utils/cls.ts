import { ClassNameValueProp } from './types';

export const cls = (...classes: ClassNameValueProp[]): string => {
	const classnames: string[] = [];

	for (const classname of classes) {
		if (!classname) continue;

		if (typeof classname === 'string') {
			classnames.push(classname);
		}

		if (typeof classname === 'object') {
			for (const [key, value] of Object.entries(classname)) {
				if (value) {
					classnames.push(key);
				}
			}
		}
	}

	return classnames.join(' ');
};
