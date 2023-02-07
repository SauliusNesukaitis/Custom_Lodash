/*
Creates an array of elements split into groups the length of size.
If array can't be split evenly, the final chunk will be the remaining elements.

_.chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]
 
_.chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]
*/

function chunk(array, size = 1) {
    let l = array.length;
    if (l === 0 || size === 0) return [];
    let result = []
    let outerIndex = 0
    let innerArr = [];
    for (let i = 0; i < l; i++) {
      let index = i % size;
      innerArr[index] = array[i];
      if (index === size - 1 || i === l - 1) {
        result.push(innerArr);
        innerArr = [];
        outerIndex++;
      }
    }
    return result;
  }
  
  module.exports = chunk;
  