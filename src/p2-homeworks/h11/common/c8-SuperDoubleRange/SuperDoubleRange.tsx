import React from 'react';
import {makeStyles, Slider} from '@material-ui/core';

export type SuperDoubleRangePropsType = {
   onChangeRange?: (value: Array<number>) => void
   value?: [number, number]
   min: number
   max: number
   step: number
   disable: boolean
}

const useStyles = makeStyles({
   root: {
      width: 300,
   },
});
const marks = [
   {
      value: 0,
      label: '0',
   },
   {
      value: 100,
      label: '100',
   },
];

function valuetext(value: number) {
   return `${value}`;
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
   {
      onChangeRange, value,
      min, max, step , disable
   }
) => {
   // сделать самому, можно подключать библиотеки
   const classesMUI = useStyles();

   const handleChange = (event: any, newValue: number | number[]) => {
      onChangeRange && onChangeRange(newValue as number[]);
   }

   return (
      <div className={classesMUI.root}>
         <Slider
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            marks={marks}
            min={min}
            max={max}
            step={step}
            disabled={disable}
            getAriaValueText={valuetext}/>
      </div>
   );
}

export default SuperDoubleRange;
