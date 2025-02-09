import { ReactNode, Suspense } from 'react';
import { Route, Routes } from 'react-router';

import { appRoutes } from '@/shared/configs';
import { LoadingScreen } from '@/widgets';

import { GuestOnlyRoute } from '../GuestOnlyRoute';
import { ProtectedRoute } from '../ProtectedRoute';
import { PublicRoute } from '../PublicRoute';
import { AppRouteProps } from '../types';

const wrapElement = (element: ReactNode, isPrivate: boolean, guestOnly?: boolean) => {
	const ProcessRoute = isPrivate ? ProtectedRoute : guestOnly ? GuestOnlyRoute : PublicRoute;
	const wrappedElement = <Suspense fallback={<LoadingScreen />}>{element}</Suspense>;

	return <ProcessRoute>{wrappedElement}</ProcessRoute>;
};

const generateRoutes = (routes: AppRouteProps[], parentPath = '', isParentPrivate = false) => {
	return routes.map(route => {
		// Build the full path and ensure no duplicate slashes.
		const fullPath = `${parentPath}${route.path}`.replace(/\/+/g, '/');

		// A route is protected if it is marked private or its parent was.
		const isPrivate = route.private || isParentPrivate;

		// For public routes, check if this route is flagged as guestOnly.
		const guestOnly = !isPrivate && 'guestOnly' in route ? route.guestOnly : false;

		const element = wrapElement(route.component, isPrivate, guestOnly);

		const children = route.children
			? generateRoutes(Object.values(route.children), fullPath, isPrivate)
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
