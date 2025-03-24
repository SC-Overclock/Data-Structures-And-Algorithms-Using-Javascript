var rotate = function (nums, k) {
  k = k % nums.length;

  let pivot = nums.length - k;

  let newArr = new Array(nums.length);
  let count = 0;

  for (let i = pivot; i < nums.length; i++) {
    newArr[count] = nums[i];
    count++;
  }

  for (let i = 0; i < pivot; i++) {
    newArr[count] = nums[i];
    count++;
  }

  console.log(newArr);

  count = 0;

  while (count != nums.length) {
    nums[count] = newArr[count];
    count++;
  }
};
