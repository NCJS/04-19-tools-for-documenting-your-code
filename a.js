/**
 * Adding up
 * @description Adds up two numbers
 * @async
 * @author Andreas Groos
 * @param {number} one - first number
 * @param {number[]}  two -second number
 * @returns  {Array<number>}  the sum of one and two
 */
export const sum = async (one, two) => {
  // some async stuff
  return (await one) + two;
};

/**
 * Joins 2 arrays
 *
 * @param {number[]} arr1 first array is of numbers only!
 * @param {string[]} arr2 second array contains only strings
 * @returns {Array} joined array
 */
export function joinArr(arr1, arr2) {
  return arr1.concat(arr2);
}
