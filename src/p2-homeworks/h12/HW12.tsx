import React, {useState} from 'react';
import s from './HW12.module.css';
import SuperSelect from '../h7/common/c5-SuperSelect/SuperSelect';
import {useSelector} from 'react-redux';
import {AppStoreType} from '../h10/bll/store';
import {changeTheme, useDispatch} from './bll/themeReducer';


function HW12() {
   const theme = useSelector<AppStoreType, string>(state => state.appTheme.theme);
   const themes = useSelector<AppStoreType, string[]>(state => state.appTheme.themes);

   const dispatch = useDispatch();

   const onChangeCallback = (selectTheme: string) => dispatch(changeTheme(selectTheme));

   return (
      <div>
         <hr/>

         <span>
            homeworks 12
         </span>

         <span className={s.selectTheme}>
            <SuperSelect value={theme}
                         options={themes}
                         onChangeOption={onChangeCallback}/>
         </span>
         <hr/>
      </div>
   );
}

export default HW12;
