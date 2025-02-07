import { isTokenExpired } from '@/shared/utils';
import { RootState, logout } from '@/store';
import { FC, PropsWithChildren, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router';

export const ProtectedRoute: FC<PropsWithChildren> = ({ children }) => {
	const dispatch = useDispatch();
	const accessToken = useSelector((state: RootState) => state.authSlice.access);
	const [isValid, setIsValid] = useState(true);

	useEffect(() => {
		if (!accessToken || isTokenExpired(accessToken)) {
			dispatch(logout());
			setIsValid(false);
		}
	}, [accessToken, dispatch]);

	if (!isValid || !accessToken) {
		return <Navigate to='/sign-in' replace />;
	}

	return <>{children}</>;
};
