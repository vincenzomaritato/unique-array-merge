/**
 * Merges multiple arrays into one array of unique values, maintaining the order.
 * 
 * @param  {...any[]} arrays - The arrays to merge.
 * @returns {any[]} - The array of unique values.
 */
function uniqueArrayMerge(...arrays) {
  const set = new Set();
  for (const array of arrays) {
    for (const item of array) {
      set.add(item);
    }
  }
  return [...set];
}

export default uniqueArrayMerge;
