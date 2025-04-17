import { AppRoutesProps } from '@/app';
import { Home, NotFound404 } from '@/pages';
// import { AppRouteByDotKey, AppRoutesKeys, GetAppRouteParams } from '@/shared/types';

export const appRoutes = {
	home: {
		path: '/',
		component: <Home />,
		private: false,
	},
	notFound: {
		path: '*',
		component: <NotFound404 />,
		private: false,
	},
} as const satisfies AppRoutesProps;

// TODO: IN PROGRESS...
// type TypeOfAppRoutes = typeof appRoutes;
//
// function route<T extends AppRoutesKeys<TypeOfAppRoutes>>(
// 	scheme: T,
// ): AppRouteByDotKey<TypeOfAppRoutes, T> {
// 	return scheme.split('.').reduce(
// 		(obj: any, key: string) => {
// 			if (!(key in obj.children)) {
// 				throw new Error(`${scheme} is wrong key`);
// 			}
//
// 			return obj.children[key];
// 		},
// 		{ children: appRoutes },
// 	);
// }
//
// function to<T extends AppRoutesKeys<TypeOfAppRoutes>>(
// 	schema: T,
// 	params: GetAppRouteParams<TypeOfAppRoutes, T>,
// ) {
// 	let path: string = route(schema).path;
//
// 	Object.entries(params).forEach(([key, value]) => {
// 		path = path.replace(`:${key}`, value as string);
// 	});
//
// 	return path;
// }
//
// console.log(to('settings.test.testTwo.testThree', { id: 1, qq: 2, zz: 3 }));
