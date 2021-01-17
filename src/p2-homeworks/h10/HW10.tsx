import React from 'react';
import classes from './HW10.module.css';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import {loadingAC, useDispatch} from './bll/loadingReducer';
import {useSelector} from 'react-redux';
import {AppStoreType} from './bll/store';
import {selectIsLoading} from './bll/selectors';
import {Preloader} from './Preloader/Preloader';

function HW10() {
   // useSelector, useDispatch
   // const loading = false;

   const dispatch = useDispatch();
   const isLoading = useSelector<AppStoreType, boolean>(selectIsLoading);

   const setLoading = () => {
      dispatch(loadingAC(true));

      setTimeout(() => {
         dispatch(loadingAC(false))
      }, 2000);

      console.log('loading...');
   };

   return (
      <div>
         <hr/>
         <h3 className={classes.title}>homeworks 10</h3>
         {/*should work (должно работать)*/}
         {isLoading
            ? (
               <Preloader/>
            ) : (
               <div>
                  <SuperButton onClick={setLoading} variant='primary' size='medium' className={classes.startLoadingBtn}>set
                     loading...</SuperButton>
               </div>
            )
         }

         <hr/>
         {/*для личного творчества, могу проверить*/}
         {/*<Alternative/>*/}
         <hr/>
      </div>
   );
}

export default HW10;
