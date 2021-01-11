import React, {useRef, useState} from 'react';
import classes from './Clock.module.css';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';

function Clock() {
   const [timerId, setTimerId] = useState<number>(0);
   const [date, setDate] = useState<Date>();
   const [show, setShow] = useState<boolean>(false);

   const stop = () => {
      clearInterval(timerId);
   }
   const start = () => {
      stop();
      const id: number = window.setInterval(() => {
         setDate(new Date());
      }, 1000);
      setTimerId(id);
   }

   const onMouseEnter = () => {
      setShow(true);
   };
   const onMouseLeave = () => {
      setShow(false)
   };

   const stringTime = date?.toLocaleTimeString();
   const stringDate = date?.toLocaleDateString();

   return (
      <div>
         <div className={classes.time}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
         >
            {stringTime}
         </div>

         {show && (
            <div className={classes.date}>
               {stringDate}
            </div>
         )}

         <SuperButton onClick={start} variant={'primary'} size={'small'} style={{marginRight: '10px'}}>start</SuperButton>
         <SuperButton onClick={stop} variant={'primary'} size={'small'}>stop</SuperButton>
      </div>
   );
}

export default Clock;
