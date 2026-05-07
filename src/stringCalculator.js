function add(numbers) {
  if (numbers === "") return 0;

  let delimiter = /,|\n/;

  // Check for custom delimiter
  if (numbers.startsWith("//")) {
    delimiter = new RegExp(numbers[2]);
    numbers = numbers.slice(4);
  }

  return numbers.split(delimiter).reduce((sum, num) => sum + parseInt(num), 0);
}

module.exports = add;
