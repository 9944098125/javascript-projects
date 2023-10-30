// average of a list of numbers
function average(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sum = arr.reduce((acc, val) => acc + val);
  const average = sum / arr.length;
  return average;
}

console.log(average([2, 5, 2, 4, 3]));
