function sum(fromN, toN) {
  // Sum all the values from fromN up to toN
  // console.log(fromN);
  // console.log(toN);
  // let result = toN - fromN;
  if (toN === fromN) {
    return fromN;
  }
  // toN - fromN + (toN - 1);
  // let result = 1;
  // for (let i = toN; i > fromN; i--) {
  //   result = result + toN - fromN;
  // }
  // console.log(fromN + sum(fromN + 1, toN));
  return fromN + sum(fromN + 1, toN);

  // if (toN === fromN) {
  //   return 0;
  // }
  // let result = toN - fromN + sum(toN - 1);
  // console.log(toN + sum(toN - 1));
  // return result;
}
console.log(sum(3, 7));
module.exports = sum;

// https://github.com/ZSully09/Week-1/blob/163a5053f656d55981b9d2c202f4c3c872afa3b2/d5-FF/recursion_clone/index.js
// function sum(fromN, toN) {
//   // Sum all the values from fromN up to toN [3 --> 7]
//   // Add base Case
//   if (fromN === toN) {
//     return fromN;
//   }
//   // Add Recursive Case
//   return fromN + sum(fromN + 1, toN);
// }

// console.log(sum(3, 7));

// module.exports = sum;

// /*
// Base Case: fromN === toN
// Recursive Case: fromN + sum(fromN + 1, toN)
// */

// // Sum all the values of toN to fromN [ 7 --> 3]

// function sum(fromN, toN) {
//   if (fromN === toN) {
//     return fromN;
//   }
//   return toN + sum(fromN, toN - 1);
// }

// console.log(sum(3, 7));

/*
Base Case: fromN === toN
Recursive Case: toN + sum(fromN, toN - 1)
*/
