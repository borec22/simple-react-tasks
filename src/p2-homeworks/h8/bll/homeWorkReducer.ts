import {People} from '../HW8';

/*const SORT = 'SORT-HOME-WORK-REDUCER';
const CHECK = 'CHECK-HOME-WORK-REDUCER';*/

export enum ACTIONS_TYPE {
   SORT = 'SORT-HOME-WORK-REDUCER',
   CHECK = 'CHECK-HOME-WORK-REDUCER'
}

type actionsHomeWorkReducerType = ReturnType<typeof sort> | ReturnType<typeof checkWhoReachCurrentAge>;

export const homeWorkReducer = (state: People[], action: actionsHomeWorkReducerType): People[] => {
   switch (action.type) {
      case ACTIONS_TYPE.SORT: {
         return [...state].sort((a, b) => {
            let nameA = a.name.toLowerCase();
            let nameB = b.name.toLowerCase();

            if (nameA > nameB) {
               if (action.payload === 'up') return 1;

               return -1
            } else if (nameA < nameB) {
               if (action.payload === 'up') return -1;

               return 1;
            }

            return 0;
         });
      }
      case ACTIONS_TYPE.CHECK: {
         return state.filter(people => people.age >= action.payload);
      }
      default:
         return state
   }
};

export let sort = (typeOfSort: 'up' | 'down') => ({type: ACTIONS_TYPE.SORT, payload: typeOfSort}) as const;
export let checkWhoReachCurrentAge = (age: number) => ({type: ACTIONS_TYPE.CHECK, payload: age}) as const;