import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
	FLUSH,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
	REHYDRATE,
	persistReducer,
	persistStore,
} from 'redux-persist';
import { encryptTransform } from 'redux-persist-transform-encrypt';
import storage from 'redux-persist/lib/storage';
import { authApi } from './services';
import { authReducer } from './slices';

const persistConfig = {
	key: 'root',
	storage, // defaults to localStorage for web
	whitelist: ['authSlice'], // only this array[reducers] will be persisted
	transforms: [
		encryptTransform({
			secretKey: 'my-super-secret-key', // TODO change key
			onError: error => console.error(error),
		}),
	] as never[], // TODO: can this broke any state? encryption works asynchronously
};

const rootReducer = combineReducers({
	authSlice: authReducer,
	[authApi.reducerPath]: authApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const createReduxStore = () => {
	const store = configureStore({
		reducer: persistedReducer,
		devTools: import.meta.env.NODE_ENV !== 'production',
		// preloadedState: initialState, set initialState if needed
		// adding the api middleware enables caching, invalidation, polling and other features of `rtk-query`
		middleware: getDefaultMiddleware =>
			getDefaultMiddleware({
				serializableCheck: {
					ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
				},
			}).concat([authApi.middleware]),
	});

	const persistor = persistStore(store);

	return { store, persistor };
};
