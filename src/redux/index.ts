import {
    useDispatch as useReduxDispatch,
    useSelector as useReduxSelector,
} from 'react-redux';
import { AppDispatch, RootState } from './store';

export const useDispatch = useReduxDispatch<AppDispatch>;
export const useSelector = useReduxSelector<RootState>;
