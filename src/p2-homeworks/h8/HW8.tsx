import React, {ChangeEvent, useState} from 'react';
import s from './HW8.module.css';
import {BsArrowUp} from 'react-icons/bs';
import {BsArrowDown} from 'react-icons/bs';

import {checkWhoReachCurrentAge, homeWorkReducer, sort} from './bll/homeWorkReducer';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import SuperCheckbox from '../h4/common/c3-SuperCheckbox/SuperCheckbox';
import SuperEditableSpan from '../h6/common/c4-SuperEditableSpan/SuperEditableSpan';

export type People = {
   _id: number,
   name: string,
   age: number,
}

const initialPeople: People[] = [
   {_id: 0, name: 'Кот', age: 3},
   {_id: 1, name: 'Александр', age: 66},
   {_id: 2, name: 'Коля', age: 16},
   {_id: 3, name: 'Виктор', age: 44},
   {_id: 4, name: 'Дмитрий', age: 40},
   {_id: 5, name: 'Ирина', age: 55},
]

type SortedType = {
   up: boolean,
   down: boolean
}

function HW8() {
   const [people, setPeople] = useState(initialPeople);
   const [sorted, setSorted] = useState<SortedType>({up: false, down: false});
   const [checked, setChecked] = useState(false);
   const [value, setValue] = useState<string>('18');

   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setChecked(event.currentTarget.checked);

      if (event.currentTarget.checked) {
         setPeople(homeWorkReducer(people, checkWhoReachCurrentAge(+value)));
      } else {
         setPeople(initialPeople);
         setSorted({up: false, down: false})
      }
   }

   const finalPeople = people.map(p => (
      <tr key={p._id}>
         <td>{+p._id + 1}</td>
         <td>{p.name}</td>
         <td>{p.age}</td>
      </tr>
   ))

   const sortUp = () => {
      setSorted({up: false, down: true})
      setPeople(homeWorkReducer(people, sort('up')))
   }
   const sortDown = () => {
      setSorted({up: true, down: false})
      setPeople(homeWorkReducer(people, sort('down')))
   }

   return (
      <div>
         <hr/>
         <p> homeworks 8 </p>
         {/*should work (должно работать)*/}

         <table className={s.table}>
            <tr>
               <th>№</th>
               <th style={{cursor: 'pointer'}}
                   onClick={!sorted.up && !sorted.down ? sortUp :
                      !sorted.up && sorted.down ? sortDown : sortUp}>
                  name
                  <span style={{fontSize: '20px', position: 'absolute'}}>
                  {!sorted.up && sorted.down ? <BsArrowUp/> :
                     sorted.up && !sorted.down ? <BsArrowDown/> : null}
                  </span>
               </th>
               <th>age</th>
            </tr>
            {finalPeople}
         </table>

         <SuperCheckbox checked={checked} onChange={handleChange} style={{marginLeft: '280px'}}>check</SuperCheckbox>
         {!checked ? <SuperEditableSpan value={value}
                                        onChangeText={setValue}
                                        spanProps={{children: value ? undefined : 'enter text...'}}/> :
            <span> {value} </span>}
         <hr/>
         {/*для личного творчества, могу проверить*/}
         {/*<AlternativePeople/>*/}
         <hr/>
      </div>
   );
}

export default HW8;
