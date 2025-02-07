import { appRoutes } from '@/shared/configs';
import { LoadingScreen } from '@/widgets';
import { ReactNode, Suspense } from 'react';
import { Route, Routes } from 'react-router';
import { ProtectedRoute } from '../ProtectedRoute';
import { PublicRoute } from '../PublicRoute';
import { AppRouteProps } from '../types';

const wrapElement = (element: ReactNode, isPrivate: boolean) => {
	const wrappedElement = <Suspense fallback={<LoadingScreen />}>{element}</Suspense>;

	return isPrivate ? (
		<ProtectedRoute>{wrappedElement}</ProtectedRoute>
	) : (
		<PublicRoute>{wrappedElement}</PublicRoute>
	);
};

const generateRoutes = (routes: AppRouteProps[], parentPath = '', isParentPrivate = false) => {
	return routes.map(route => {
		const fullPath = `${parentPath}${route.path}`.replace(/\/+/g, '/');
		const isPrivate = route.private || isParentPrivate;
		const element = wrapElement(route.component, isPrivate);

		const children = route.children
			? generateRoutes(route.children, fullPath, isPrivate)
			: undefined;

		return (
			<Route key={fullPath} path={fullPath} element={element}>
				{children}
			</Route>
		);
	});
};

export const AppRouter = () => {
	const routeValues = Object.values(appRoutes);
	const routes = generateRoutes(routeValues);
	return <Routes>{routes}</Routes>;
};
