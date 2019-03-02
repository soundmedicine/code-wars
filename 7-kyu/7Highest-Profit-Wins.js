//The Highest Profit Wins: function that returns both the minimum and maximum number of the given list/array

function minMax(arr) {
  // sort the array using a compare, because sort compares string values
  arr.sort((a, b) => a - b);
  // return the first and last values from the array
  const min = arr[0];
  const max = arr[arr.length - 1];
  return [min, max];
}

function minMax(arr) {
  if (arr.length === 1) return [arr[0], arr[0]];
  let min;
  let max;
  // min variable set to the lowest of the first 2 values in the array
  // max variable set to the highest of the first two values in the array
  if (arr[0] < arr[1]) {
    min = arr[0];
    max = arr[1];
  } else {
    max = arr[0];
    min = arr[1];
  }

  // iterate up from the 3rd value to the end of the array
  for (let i = 2; i < arr.length; i++) {
    const currentValue = arr[i];
    // if the current value is less than the current min
    if (currentValue < min) {
      // set the min to be the current value
      min = currentValue;
    } else if (currentValue > max) {
      // else if the current value is greater than the current max,
      // set the max to be the current value
      max = currentValue;
    }
  }
  // return the min and max in an array
  return [min, max];

}

function minMax(arr) {
  const min = Math.min(...arr);
  // const min = Math.min.apply(null, arr);
  const max = Math.max(...arr);
  // const max = Math.max.apply(null, arr);
  return [min, max];
}

function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}