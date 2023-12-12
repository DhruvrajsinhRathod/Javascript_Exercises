// function reverseNumber(num) {
//   let numStr = String(num);
//   let answer = numStr.split("").reverse().join("");
//   return answer;
// }

// function reverseNumberNew(num1) {
//   let result = 0;
//   while (num1 > 0) {
//     let rightmost = num1 % 10;
//     result = result * 10 + rightmost;
//     num1 = Math.floor(num1 / 10);
//   }
//   let answer = String(result);
//   return answer;
// }

// console.log(reverseNumber(123123));
// console.log(reverseNumberNew(1231234));

// function demoRev(num) {
//   let answer = 0;

//   while (num > 0) {
//     let right = num % 10;
//     answer = answer * 10 + right;
//     num = Math.floor(num / 10);
//   }

//   return answer;
// }

// console.log(demoRev(887617862378));

function myRev(numb) {
  let solution = 0;

  while (numb > 0) {
    let right = numb % 10;
    solution = solution * 10 + right;
    numb = Math.floor(numb / 10);
  }
  return solution
}

console.log("The Latest One");
console.log(myRev(987231));
