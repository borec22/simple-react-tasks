import {People} from '../HW8';

const SORT = 'SORT-HOME-WORK-REDUCER';
const CHECK = 'CHECK-HOME-WORK-REDUCER';

type actionsType = ReturnType<typeof sort> | ReturnType<typeof checkWhoReachCurrentAge>;

export const homeWorkReducer = (state: People[], action: actionsType): People[] => {
   switch (action.type) {
      case SORT: {
         return [...state].sort((a, b) => {
            let nameA = a.name.toLowerCase();
            let nameB = b.name.toLowerCase();

            if (nameA > nameB) {
               if (action.payload === 'up') return  1;

               return -1
            } else if (nameA < nameB) {
               if (action.payload === 'up') return  -1;

               return 1;
            }

            return 0;
         });
      }
      case CHECK: {
         return state.filter(people => people.age >= action.payload);
      }
      default:
         return state
   }
};

export let sort = (typeOfSort: 'up' | 'down') => ({type: SORT, payload: typeOfSort}) as const;
export let checkWhoReachCurrentAge = (age: number) => ({type: CHECK, payload: age}) as const;