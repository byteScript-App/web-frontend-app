import { RootState } from '@/store';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

// Use throughout the app instead of plain `useSelector`
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
