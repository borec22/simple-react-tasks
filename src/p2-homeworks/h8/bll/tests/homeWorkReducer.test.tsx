import React from 'react';
import {checkWhoReachCurrentAge, homeWorkReducer, sort} from '../homeWorkReducer';
import {People} from '../../HW8';

let initialState: People[];

beforeEach(() => {
   initialState = [
      {_id: 0, name: 'Кот', age: 3},
      {_id: 1, name: 'Александр', age: 66},
      {_id: 2, name: 'Коля', age: 16},
      {_id: 3, name: 'Виктор', age: 44},
      {_id: 4, name: 'Дмитрий', age: 40},
      {_id: 5, name: 'Ирина', age: 55},
   ]
});

test('sort name up', () => {
   const newState = homeWorkReducer(initialState, sort('up'));

   expect(newState[0].name).toBe('Александр');
   expect(newState[5].name).toBe('Кот');
});
test('sort name down', () => {
   const newState = homeWorkReducer(initialState, sort('down'));

   expect(newState[0].name).toBe('Кот');
   expect(newState[5].name).toBe('Александр');
});
test('check age 18', () => {
   const newState: People[] = homeWorkReducer(initialState, checkWhoReachCurrentAge(18));

   let man = newState.find(m => m.name === 'Коля');

   expect(newState.length).toBe(4);
   expect(man).toBeFalsy();
   expect(newState[0].name).toBe('Александр');
});
