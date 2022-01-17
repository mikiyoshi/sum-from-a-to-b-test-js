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
