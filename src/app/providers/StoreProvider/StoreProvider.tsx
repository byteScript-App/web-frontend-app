import { createReduxStore } from '@/store';
import { FC, PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

export const StoreProvider: FC<PropsWithChildren> = ({ children }) => {
	const { store, persistor } = createReduxStore();

	return (
		<Provider store={store}>
			{/* TODO: Set Loading component for persistor */}
			<PersistGate loading={null} persistor={persistor}>
				{children}
			</PersistGate>
		</Provider>
	);
};
