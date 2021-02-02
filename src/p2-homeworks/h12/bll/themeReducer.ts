import {useDispatch as _useDispatch} from 'react-redux';

type InitialStateType = {
   themes: string[],
   theme: string
}

enum ACTIONS_TYPES {
   CHANGE_THEME= 'THEME_REDUCER/CHANGE_THEME'
}



const initState: InitialStateType = {
   themes: ['dark', 'red', 'blue', 'yellow', 'some'],
   theme: 'some'
};

export const themeReducer = (state: InitialStateType = initState, action: themeReducersActionsTypes): InitialStateType => {
    switch (action.type) {
        case ACTIONS_TYPES.CHANGE_THEME: {
            return {...state, ...action.payload};
        }
        default: return state;
    }
};

type changeThemeType = {
   type: ACTIONS_TYPES.CHANGE_THEME,
   payload: {theme: string}
}

export const changeTheme = (theme: string): changeThemeType => ({type: ACTIONS_TYPES.CHANGE_THEME, payload: {theme}}) as const;


type themeReducersActionsTypes = ReturnType<typeof changeTheme>;

export const useDispatch = () => {
   let dispatch = _useDispatch();
   return (ac: themeReducersActionsTypes) => dispatch(ac);
}