import { FC, PropsWithChildren } from 'react';

export const PublicRoute: FC<PropsWithChildren> = ({ children }) => {
	// Leaving PublicRoute as we may need this to do smth with all our PublicRoutes in the future!
	return <>{children}</>;
};
