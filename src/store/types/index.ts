import { createReduxStore } from '../store';

type Store = ReturnType<typeof createReduxStore>;

export type RootState = ReturnType<Store['store']['getState']>;
export type AppDispatch = Store['store']['dispatch'];
