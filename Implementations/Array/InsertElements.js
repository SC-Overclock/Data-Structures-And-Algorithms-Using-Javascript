/*  


Implement a function modifyArray that takes an array and two additional arguments:

index – the position where a new element should be added.

value – the value to insert at the given index.



This function should add the element at the specified index and return the modified array. If index is out of range, add value at the end.


*/

const modifyArray = (arr, index, value) => {
  if (index >= arr.length) {
    arr.push(value);
  } else {
    arr.splice(index, 0, value);
  }

  return arr;
};
