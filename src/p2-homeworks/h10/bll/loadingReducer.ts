import {useDispatch as _useDispatch} from 'react-redux';

enum ACTIONS_TYPE {
   TOGGLE_LOADING = 'LOADING/TOGGLE_LOADING'
}

type InitStateType = {
   isLoading: boolean
}

const initState: InitStateType = {
   isLoading: false
};

type LoadingReducersTypes = ReturnType<typeof loadingAC>;

export const loadingReducer = (state: InitStateType = initState, action: LoadingReducersTypes): InitStateType => {
    switch (action.type) {
        case ACTIONS_TYPE.TOGGLE_LOADING: {
            return {...state, ...action.payload};
        }
        default: return state;
    }
};

export const loadingAC = (isLoading: boolean) => ({type: ACTIONS_TYPE.TOGGLE_LOADING, payload: {isLoading}}) as const;

export const useDispatch = () => {
   let dispatch = _useDispatch();
   return (ac: LoadingReducersTypes) => dispatch(ac);
}