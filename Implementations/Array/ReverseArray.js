// Reverse An Array - 

// Question Link - https://www.geeksforgeeks.org/problems/reverse-an-array/0


function reverseArray(arr) {
  

  for (let i = 0; i < arr.length / 2; i++) {
    let swap = arr[i];
    arr[i] = arr[arr.length - i - 1];
    arr[arr.length - i - 1] = swap;
  }
}
