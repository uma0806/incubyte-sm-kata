function add(numbers) {
  if (numbers === "") return 0;

  let delimiter = /,|\n/;

  // Check for custom delimiter
  if (numbers.startsWith("//")) {
    delimiter = new RegExp(numbers[2]);
    numbers = numbers.slice(4);
  }

  // Convert all numbers into array
  const nums = numbers.split(delimiter).map(Number);

  // Check for negative numbers
  const negatives = nums.filter((num) => num < 0);

  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed: ${negatives.join(",")}`);
  }

  // Return sum
  return nums.reduce((sum, num) => sum + num, 0);
}

module.exports = add;
