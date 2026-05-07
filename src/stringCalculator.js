// function add(numbers) {
//   if (numbers === "") return 0;

//   //   if (numbers.includes(",")) {
//   //     return numbers.split(",").reduce((sum, num) => sum + parseInt(num), 0);
//   //   }
//   if (numbers.includes(",")) {
//     return numbers.split(",").reduce((sum, num) => sum + parseInt(num), 0);
//   }

//   return parseInt(numbers);
// }

// module.exports = add;
////////////////////////////////////////
function add(numbers) {
  if (numbers === "") return 0;

  // Replace new lines with commas
  numbers = numbers.replace(/\n/g, ",");

  // Handle multiple comma-separated numbers
  if (numbers.includes(",")) {
    return numbers.split(",").reduce((sum, num) => sum + parseInt(num), 0);
  }

  // Handle single number
  return parseInt(numbers);
}

module.exports = add;
