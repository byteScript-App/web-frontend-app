import { AppRoutesProps } from '@/app';
import { Home, Profile, Settings, SignIn, SignUp } from '@/pages';
// import { AppRouteByDotKey, AppRoutesKeys, GetAppRouteParams } from '@/shared/types';

export const appRoutes = {
	home: {
		path: '/',
		component: <Home />,
		private: false,
	},
	signIn: {
		path: '/sign-in',
		component: <SignIn />,
		guestOnly: true,
		private: false,
	},
	signUp: {
		path: '/sign-up',
		component: <SignUp />,
		guestOnly: true,
		private: false,
	},
	profile: {
		path: '/profile',
		component: <Profile />,
		private: true,
	},
	settings: {
		path: '/settings',
		component: <Settings />,
		private: false,
		children: {
			test: {
				path: '/test',
				component: <Settings />,
				private: false,
				children: {
					testTwo: {
						path: '/test-two/:id',
						component: <Settings />,
						private: false,
						children: {
							testThree: {
								path: '/test-three/:id/tt/:qq-:zz',
								component: <Settings />,
								private: false,
							},
						},
					},
				},
			},
		},
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
