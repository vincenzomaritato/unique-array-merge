import test from 'ava';
import uniqueArrayMerge from './index.js';

test('merges arrays of numbers', t => {
  const numberArray1 = [1, 2, 3];
  const numberArray2 = [3, 4, 5];
  const result = uniqueArrayMerge(numberArray1, numberArray2);
  t.deepEqual(result, [1, 2, 3, 4, 5]);
});

test('merges arrays of strings', t => {
  const stringArray1 = ['a', 'b', 'c'];
  const stringArray2 = ['c', 'd', 'e'];
  const result = uniqueArrayMerge(stringArray1, stringArray2);
  t.deepEqual(result, ['a', 'b', 'c', 'd', 'e']);
});

test('merges arrays of mixed types', t => {
  const mixedArray1 = [1, 'a', true];
  const mixedArray2 = [2, 'b', false];
  const result = uniqueArrayMerge(mixedArray1, mixedArray2);
  t.deepEqual(result, [1, 'a', true, 2, 'b', false]);
});
