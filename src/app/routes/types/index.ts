import { ReactNode } from 'react';

interface AppRouteBaseProps {
	path: string;
	component: ReactNode;
}

interface PublicAppRouteProps extends AppRouteBaseProps {
	private: false;
	guestOnly?: boolean;
	children?: Record<string, PublicAppRouteProps | PrivateAppRouteProps>;
}

interface PrivateAppRouteProps extends AppRouteBaseProps {
	private: true;
	children?: Record<string, PrivateAppRouteProps>;
}

export type AppRouteProps = PublicAppRouteProps | PrivateAppRouteProps;

export type AppRoutesProps = Record<string, AppRouteProps>;
