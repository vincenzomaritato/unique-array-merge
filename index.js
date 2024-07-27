/**
 * Merges multiple arrays into one array of unique values, maintaining the order.
 *
 * @param  {...any[]} arrays - The arrays to merge.
 * @returns {any[]} - The array of unique values.
 */
const uniqueArrayMerge = (...arrays) => [...new Set(arrays.flat())];

export default uniqueArrayMerge;
