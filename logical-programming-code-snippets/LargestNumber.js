function findLargestNumber(numbers) {
  let largestNumber = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largestNumber) {
      largestNumber = numbers[i];
    }
  }
  return largestNumber;
}

let myArray = [1, 4, 7, 3, 9, 2];
let largestNumber = findLargestNumber(myArray);
console.log(largestNumber);
