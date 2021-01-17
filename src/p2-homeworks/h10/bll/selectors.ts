import {AppStoreType} from './store';

interface IRootState extends AppStoreType {}

export const selectIsLoading = (state: IRootState) => state.loading.isLoading;