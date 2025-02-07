import { authApi } from '@/store';
import { createSlice } from '@reduxjs/toolkit';
import { AuthStateProps } from './types';

const initialState: AuthStateProps = {
	user_id: null,
	refresh: null,
	access: null,
};

const authSlice = createSlice({
	name: 'authSlice',
	initialState,
	reducers: {
		logout: state => {
			state.user_id = null;
			state.refresh = null;
			state.access = null;
		},
	},
	extraReducers: builder => {
		builder.addMatcher(authApi.endpoints.login.matchFulfilled, (state, { payload }) => {
			state.user_id = payload.user_id;
			state.refresh = payload.refresh;
			state.access = payload.access;
		});
	},
});

export const { logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
