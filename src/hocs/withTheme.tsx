import React from 'react';
import s from './withTheme.module.css';
import {useSelector} from 'react-redux';
import {AppStoreType} from '../p2-homeworks/h10/bll/store';

export function withTheme<T>(WrappedComponent: React.ComponentType<T>) {
   function ThemeComponent(props: T) {
      const theme = useSelector<AppStoreType, string>(state => state.appTheme.theme);

      return (
         <div className={`${s[theme]} ${s[theme + '-text']}`}>
            <WrappedComponent {...props as T}/>
         </div>
      );
   }

   return ThemeComponent;
}