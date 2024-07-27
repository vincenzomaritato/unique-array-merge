/**
 * Merges multiple arrays into one array of unique values, maintaining the order.
 *
 * @param  {...Array<T>} arrays - The arrays to merge.
 * @returns {Array<T>} - The array of unique values.
 *
 * @example
 * import uniqueArrayMerge from 'unique-array-merge';
 *
 * // Example with numbers
 * const numberArray1 = [1, 2, 3];
 * const numberArray2 = [3, 4, 5];
 * const result1 = uniqueArrayMerge(numberArray1, numberArray2);
 * console.log(result1); // [1, 2, 3, 4, 5]
 *
 * // Example with strings
 * const stringArray1 = ['a', 'b', 'c'];
 * const stringArray2 = ['c', 'd', 'e'];
 * const result2 = uniqueArrayMerge(stringArray1, stringArray2);
 * console.log(result2); // ['a', 'b', 'c', 'd', 'e']
 *
 * // Example with mixed types
 * const mixedArray1 = [1, 'a', true];
 * const mixedArray2 = [2, 'b', false];
 * const result3 = uniqueArrayMerge(mixedArray1, mixedArray2);
 * console.log(result3); // [1, 'a', true, 2, 'b', false]
 */
declare function uniqueArrayMerge<T>(...arrays: T[][]): T[];

export default uniqueArrayMerge;
