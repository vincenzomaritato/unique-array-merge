import uniqueArrayMerge from './index.js';
import {expectType} from 'tsd';

const numberArray1 = [1, 2, 3];
const numberArray2 = [3, 4, 5];
const result1 = uniqueArrayMerge(numberArray1, numberArray2);
expectType<number[]>(result1);

const stringArray1 = ['a', 'b', 'c'];
const stringArray2 = ['c', 'd', 'e'];
const result2 = uniqueArrayMerge(stringArray1, stringArray2);
expectType<string[]>(result2);

const mixedArray1 = [1, 'a', true];
const mixedArray2 = [2, 'b', false];
const result3 = uniqueArrayMerge(mixedArray1, mixedArray2);
expectType<Array<number | string | boolean>>(result3);
