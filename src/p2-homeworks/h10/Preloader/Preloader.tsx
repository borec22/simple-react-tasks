import React from 'react';
import classes from './Preloader.module.css';

export const Preloader = () => {
   return (
      <div className={classes.loaderContainer}>
         <div className={classes.ldsHourglass}></div>
         <div className={classes.textLoading}>Loading...</div>
      </div>
   );
}