import React from 'react';
import HW7 from '../../h7/HW7';
import HW8 from '../../h8/HW8';
import HW9 from '../../h9/HW9';
import {withTheme} from '../../../hocs/withTheme';

function Junior() {
   return (
      <div>
         <HW7/>
         <HW8/>
         <HW9/>
      </div>
   );
}

export default withTheme(Junior);