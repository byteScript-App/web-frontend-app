import { AppRoutesProps } from '@/app';
import { Dashboard, SignIn, SignUp, TestChildRoute } from '@/pages';
import { Navigate } from 'react-router';

export const appRoutes: AppRoutesProps = {
	root: {
		path: '/',
		component: <Navigate to='/sign-in' replace />,
		private: false,
	},
	signIn: {
		path: '/sign-in',
		component: <SignIn />,
		private: false,
	},
	signUp: {
		path: '/sign-up',
		component: <SignUp />,
		private: false,
	},
	dashboard: {
		path: '/dashboard',
		component: <Dashboard />,
		private: true,
		children: [
			{
				path: '/dashboard/child',
				component: <TestChildRoute />,
				private: true,
			},
			{
				path: 'dashboard/child2',
				component: <TestChildRoute />,
				private: true,
			},
		],
	},
};
