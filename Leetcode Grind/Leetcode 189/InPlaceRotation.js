const reverse = (nums, start, end) => {
  while (start < end) {
    let swap = nums[start];
    nums[start] = nums[end];
    nums[end] = swap;

    start++;
    end--;
  }
};

const rotate = (nums, k) => {
  k = k % nums.length;

  let pivot = nums.length - k;

  reverse(nums, 0, pivot - 1);
  reverse(nums, pivot, nums.length - 1);
  reverse(nums, 0, nums.length - 1);
};
