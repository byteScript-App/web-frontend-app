import { ReactNode } from 'react';

interface AppRouteBaseProps {
	path: string;
	component: ReactNode;
}

interface PublicAppRouteProps extends AppRouteBaseProps {
	private: false;
	children?: (PublicAppRouteProps | PrivateAppRouteProps)[];
}

interface PrivateAppRouteProps extends AppRouteBaseProps {
	private: true;
	children?: PrivateAppRouteProps[];
}

export type AppRouteProps = PublicAppRouteProps | PrivateAppRouteProps;

export type AppRoutesProps = Record<string, AppRouteProps>;
