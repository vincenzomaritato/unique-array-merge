/**
 * Merges multiple arrays into one array of unique values, maintaining the order.
 *
 * @param  {...Array<T>} arrays - The arrays to merge.
 * @returns {Array<T>} - The array of unique values.
 *
 * @example
 * import uniqueArrayMerge = require('unique-array-merge');
 *
 * // Example with numbers
 * const numArray1 = [1, 2, 3];
 * const numArray2 = [3, 4, 5];
 * const result1 = uniqueArrayMerge(numArray1, numArray2);
 * console.log(result1); // [1, 2, 3, 4, 5]
 *
 * // Example with strings
 * const strArray1 = ['a', 'b', 'c'];
 * const strArray2 = ['c', 'd', 'e'];
 * const result2 = uniqueArrayMerge(strArray1, strArray2);
 * console.log(result2); // ['a', 'b', 'c', 'd', 'e']
 *
 * // Example with mixed types
 * const mixedArray1 = [1, 'a', true];
 * const mixedArray2 = [2, 'b', false];
 * const result3 = uniqueArrayMerge(mixedArray1, mixedArray2);
 * console.log(result3); // [1, 'a', true, 2, 'b', false]
 */
declare function uniqueArrayMerge<T>(...arrays: Array<T[]>): T[];

export = uniqueArrayMerge;
