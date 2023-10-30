// sum of all numbers in the list
function sum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

const arr = [1, 3, 6, 4];
console.log(sum(arr));
