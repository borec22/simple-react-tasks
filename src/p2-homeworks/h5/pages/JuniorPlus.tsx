import React from 'react';
import HW10 from '../../h10/HW10';
import HW11 from '../../h11/HW11';
import HW12 from '../../h12/HW12';
import {withTheme} from '../../../hocs/withTheme';
import HW13 from '../../HW13/HW13';

function JuniorPlus() {
   return (
      <div>
         <HW10/>
         <HW11/>
         <HW12/>
         <HW13/>
      </div>
   );
}

export default withTheme(JuniorPlus);