// ======================= 1 ==========================
// function height(n) {
//   let result = "";
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= i; j++) {
//       result += j + " ";
//     }
//     result += "\n";
//   }
//   return result;
// }
// console.log(height(5));

// ======================= 2 ==========================
// let arrInput = [10, 55, 79, 32];
// let maxValue = 0;
// for (let i = 0; i < arrInput.length; i++) {
//   if (maxValue < arrInput[i]) {
//     maxValue = arrInput[i];
//   }
// }
// console.log(maxValue);

// =====================exercise1===================
// function height(n) {
//   let count = 1;
//   let result = "";
//   for (let i = 1; i <= n - 1; i++) {
//     for (let j = 1; j <= i; j++) {
//       if (count !== 10) {
//         result += "0" + count + "  ";
//       } else {
//         result += count + " ";
//       }
//       count++;
//     }
//     result += "\n";
//   }
//   return result;
// }
// console.log(height(5));

// =====================exercise2===================
// function replace(n) {
//   let arr = [];
//   for (let i = 1; i <= n; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       arr.push("FizzBuzz");
//     } else if (i % 3 === 0) {
//       arr.push("Fizz");
//     } else if (i % 5 === 0) {
//       arr.push("Buzz");
//     } else {
//       arr.push(i);
//     }
//   }
//   console.log(arr.join(", "));
// }
// replace(6);
// replace(15);

// ====================exercise3====================
// function bmi(weight, height) {
//   const bmi = weight / (height * height);
//   if (bmi < 18.5) {
//     console.log("less weight");
//   } else if (bmi < 25) {
//     console.log("ideal");
//   } else if (bmi < 30) {
//     console.log("very overweight");
//   } else {
//     console.log("obesity");
//   }
// }
// bmi(50, 1.65);
// bmi(60, 1.65);
// bmi(80, 1.65);
// bmi(90, 1.65);

// =====================exercise4===================
// TANPA FUNCTION
// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let result = [];
// for (let i = 1; i < num.length; i++) {
//   if (num[i] % 2 === 0) {
//     result.push(num[i]);
//   }
// }
// console.log(result);

// DENGAN FUNCTION
// function evenNum(num) {
//   let result = [];
//   for (let i = 1; i < num.length; i++) {
//     if (num[i] % 2 !== 0) {
//       result.push(num[i]);
//     }
//   }
//   return result;
// }
// console.log(evenNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// ====================exercise5====================
// TANPA FUNCTION
// let hello = "Hello World";
// let result = hello.split(" ");
// console.log(result);

// DENGAN FUNCTION
// function splitStr(str) {
//   return str.split(" ");
// }
// console.log(splitStr("Hello World"));
