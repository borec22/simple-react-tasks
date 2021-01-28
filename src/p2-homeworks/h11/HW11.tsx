import React, {ChangeEvent, useState} from 'react';
import SuperRange from './common/c7-SuperRange/SuperRange';
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange';
import classes from './HW11.module.css';
import {Box, Grid, Paper, Typography} from '@material-ui/core';

function HW11() {
   const [value1, setValue1] = useState(0);
   const [value2, setValue2] = useState(100);

   const changeRange = ([min, max]: Array<number>) => {
      setValue1(min);
      setValue2(max);
   }

   const setMin = (e: ChangeEvent<HTMLInputElement>) => setValue1(+e.currentTarget.value);
   const setMax = (e: ChangeEvent<HTMLInputElement>) => setValue2(+e.currentTarget.value);

   return (
      <div>
         <hr/>
         homeworks 11

         {/*should work (должно работать)*/}

         <Grid container>
            <Paper elevation={3} style={{margin: '10px 0'}}>
               <Box p={2} width="100%">
                  <Typography variant="h6">
                     <Box mb={2} fontWeight={500}>
                        Super range
                     </Box>
                  </Typography>

                  <span>{value1}</span>
                  <SuperRange value={value1} onChangeRange={setValue1}
                     // сделать так чтоб value1 изменялось
                  />
               </Box>
            </Paper>
         </Grid>

         <hr/>
         <Grid container>
            <Paper elevation={3} style={{margin: '10px 0'}}>
               <Box p={2} width="100%">
                  <Typography variant="h6">
                     <Box mb={2} fontWeight={500}>
                        Super double range
                     </Box>
                  </Typography>
                  <div className={classes.currentValue}>
                     <label htmlFor="minInput">Min: </label>
                     <input
                        id="minInput"
                        type="number"
                        onChange={setMin}
                        value={value1}
                        min="0"
                        max="100"
                     />

                     <br/>
                     <label htmlFor="maxInput">Max: </label>
                     <input
                        id="maxInput"
                        type="number"
                        onChange={setMax}
                        value={value2}
                        min="0"
                        max="100"
                     />

                  </div>

                  <SuperDoubleRange value={[value1, value2]}
                                    onChangeRange={changeRange}
                                    min={0}
                                    max={100}
                                    step={1}
                                    disable={false}
                     // сделать так чтоб value1 и value2 изменялось
                  />
               </Box>
            </Paper>
         </Grid>

         <hr/>
         {/*для личного творчества, могу проверить*/}
         {/*<AlternativeSuperRange/>*/}
         {/*<AlternativeSuperDoubleRange/>*/}
         <hr/>
      </div>
   );
}

export default HW11;
