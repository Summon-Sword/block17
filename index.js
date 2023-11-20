// Complete the Numbers class below
// the constructor has already been provided

class Numbers {
  constructor(data) {
    // Data can either be a string or an array of numbers
    if (typeof data === "string") {
      this.data = data.split(",").map((number) => Number(number));
    } else {
      this.data = data;
    }
  }

  count() {
  // Initialize a counter
  let count = 0;

  // Iterate through the data array and increment the counter for each element
  for (const number of this.data) {
    count++;
  }

  // Return the count of numbers
  return count;
  }

  printNumbers() {
    // Print the numbers in data along with their indexes
    this.data.forEach((number, index) => {
      console.log(`Index ${index}: ${number}`);
    });
  }

  odds() {
    // Return the odd numbers in data
    return this.data.filter((number) => number % 2 !== 0);
  }

  evens() {
    // Return the even numbers in data
    return this.data.filter((number) => number % 2 === 0);
  }

  sum() {
    // Return the sum of the numbers
    return this.data.reduce((accumulator, number) => accumulator + number, 0);
  }

  product() {
    // Return the product of the numbers
    return this.data.reduce((accumulator, number) => accumulator * number, 1);
  }

  greaterThan(target) {
    // Return the numbers greater than the target
    return this.data.filter((number) => number > target);
  }

  howMany(target) {
    // Return the count of a given number
    return this.data.filter((number) => number === target).length;
  }
}

// Prompt the user for a list of integers separated by commas
const str = prompt("Enter some numbers, like this", "1,2,3,3,5,9");

// Create an instance of Numbers
const n1 = new Numbers(str);
console.log(`Count of Numbers: ${n1.count()}`);
n1.printNumbers();
console.log(`Odd Numbers: ${n1.odds()}`);
console.log(`Even Numbers: ${n1.evens()}`);
console.log(`Sum of Numbers: ${n1.sum()}`);
console.log(`Product of Numbers: ${n1.product()}`);
console.log(`Numbers Greater Than 3: ${n1.greaterThan(3)}`);
console.log(`Count of Number 3: ${n1.howMany(3)}`);