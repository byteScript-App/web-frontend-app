import { AppDispatch } from '@/store';
import { useDispatch } from 'react-redux';

// Use throughout the app instead of plain `useDispatch`
export const useAppDispatch = () => useDispatch<AppDispatch>();
