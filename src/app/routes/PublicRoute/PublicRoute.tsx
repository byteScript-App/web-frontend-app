import { FC, PropsWithChildren, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router';

import { isTokenExpired } from '@/shared/utils';
import { RootState, logout } from '@/store';

export const PublicRoute: FC<PropsWithChildren> = ({ children }) => {
	const dispatch = useDispatch();
	const accessToken = useSelector((state: RootState) => state.authSlice.access);
	const [isValid, setIsValid] = useState(true);

	useEffect(() => {
		if (accessToken) {
			if (isTokenExpired(accessToken)) {
				dispatch(logout());
				setIsValid(false);
			} else {
				setIsValid(true);
			}
		} else {
			setIsValid(false);
		}
	}, [accessToken, dispatch]);

	if (isValid && accessToken) {
		return <Navigate to='/dashboard' replace />;
	}

	return <>{children}</>;
};
