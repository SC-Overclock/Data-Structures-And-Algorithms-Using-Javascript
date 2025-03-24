const findMinMax = (arr) => {
  let min = Number.MAX_VALUE;
  let max = Number.MIN_VALUE;

  for (let i = 0; i < arr.length; i++) {
    min = Math.min(arr[i], min);
    max = Math.max(arr[i], max);
  }

  return { min, max };
};
