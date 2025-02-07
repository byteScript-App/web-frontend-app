import { RootState } from '@/store';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { LoginRequest, LoginResponse } from './types';

export const authApi = createApi({
	reducerPath: 'authApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://127.0.0.1:8000/',
		prepareHeaders: (headers, { getState }) => {
			const token = (getState() as RootState).authSlice.access;
			if (token) {
				headers.set('Authorization', `Bearer ${token}`);
			}
			return headers;
		},
	}),
	endpoints: builder => ({
		login: builder.mutation<LoginResponse, LoginRequest>({
			query: credentials => ({
				url: 'users/login/',
				method: 'POST',
				body: credentials,
			}),
		}),
	}),
});

export const { useLoginMutation } = authApi;
