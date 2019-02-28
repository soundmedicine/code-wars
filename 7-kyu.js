//The Highest Profit Wins: function that returns both the minimum and maximum number of the given list/array

function minMax(arr){
  // sort the array
  arr.sort((a, b) => a - b);
  // return the first and last values from the array
  const min = arr[0];
  const max = arr[arr.length - 1];
  return [min, max];
}

