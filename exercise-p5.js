// ==================== 1 ======================== //
// let arr = [12, 5, 23, 18, 4, 45, 32];
// let arr2 = arr.sort((a, b) => a - b);
// console.log(`Lowest: ${arr2[0]}`);
// console.log(`Highest: ${arr2[arr2.length - 1]}`);
// console.log(`Average: ${arr2.reduce((a, b) => a + b) / arr2.length}`);

// ==================== 2 ======================== //
// let arr = ["apple", "banana", "cherry", "date"];
// let arr2 = "";
// for (let i = 0; i < arr.length; i++) {
//   if (i === arr.length - 2) {
//     arr2 += arr[i] + ", and ";
//   } else if (i === arr.length - 1) {
//     arr2 += arr[i];
//   } else {
//     arr2 += arr[i] + ",";
//   }
// }
// console.log(arr2);

// ==================== 3 ======================== //
// let hello = "Hello World";
// console.log(hello.split(" "));

// ==================== 4 ======================== //
// cara 1
// let a = [1, 2, 3];
// let b = [3, 2, 1];
// let result = [];
// for (let i = 0; i < a.length; i++) {
//   result.push(a[i] + b[i]);
//   // result.push(a[i] + a.reverse()[i]);
// }
// console.log(result);

// cara 2
// let num = [1, 2, 3];
// let result = a.map((item) => item + a.reverse()[item - 1]);
// console.log(result);

// ==================== 5 ======================== //
// function newElement(n) {
//   let arr = [1, 2, 3, 4];
//   if (arr.includes(n)) {
//     return arr;
//   } else {
//     arr.push(n);
//   }
//   return arr;
// }
// console.log(newElement(4));
// console.log(newElement(7));

// ==================== 1 ======================== //
// let numbers = [1, 2, 3, 4, 5, 6];
// let result = [];
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 !== 0) {
//     result.push(numbers[i]);
//   }
// }
// console.log(result);

// ==================== 2 ======================== //
// function maxSize(n) {
//   let integer = "5, 10, 24, 3, 6, 7, 8";
//   let filter = integer.split(", ");
//   return filter.splice(0, n);
// }
// console.log(maxSize(5));

// ==================== 3 ======================== //
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let result = [];
// result.push(...arr1, ...arr2);
// console.log(result);

// ==================== 4 ======================== //
// TANPA FUNCTION
// let arr = [1, 2, 2, 2, 3, 3, 4, 5, 5];
// let result = [];
// for (let i = 1; i < arr.length; i++) {
//   for (let j = 0; j < i; j++) {
//     if (result.includes(arr[i])) {
//       continue;
//     } else if (arr[i] === arr[j]) {
//       result.push(arr[i]);
//     } else {
//       continue;
//     }
//   }
// }
// console.log(result);
// DENGAN FUNCTION
// function findDuplicate(arr) {
//   let result = [];
//   for (let i = 1; i < arr.length; i++) {
//     for (let j = 0; j < i; j++) {
//       if (result.includes(arr[i])) {
//         continue;
//       } else if (arr[i] === arr[j]) {
//         result.push(arr[i]);
//       } else {
//         continue;
//       }
//     }
//   }
//   return result;
// }
// console.log(findDuplicate([1, 2, 2, 2, 3, 3, 4, 5, 5]));

// ==================== 5 ======================== //
// function diffArr(arr1, arr2) {
//   let result = [];
//   arr1.forEach((item) => {
//     if (!arr2.includes(item)) {
//       result.push(item);
//     }
//   });
//   return result;
// }
// console.log(diffArr([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));

// ==================== 1 ======================== //
// function primitiveData(arr) {
//   let result = [];
//   arr.forEach((item) => {
//     if (typeof item !== "object") {
//       result.push(item);
//     }
//   });
//   return result;
// }
// console.log(primitiveData([1, [], undefined, {}, "string", []]));

// ==================== 2 ======================== //
// function secondSmallNumber(arr) {
//   arr.sort((a, b) => a - b);
//   return arr[1];
// }
// console.log(secondSmallNumber([5, 3, 1, 7, 2, 6]));

// ==================== 3 ======================== //
// NYOBA ARROW FUNCTION
// const sumNumber = (mixedArr) => {
//   let result = [];
//   mixedArr.forEach((item) => {
//     if (typeof item === "number") {
//       result.push(item);
//     }
//   });
//   // result = [1, 2]
//   return result.reduce((nilaiPertama, nilaiKedua) => nilaiPertama + nilaiKedua, 0);
// };
// console.log(sumNumber(["3", 1, "string", null, false, undefined, 2]));

// cara penggunaan reduce = https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

// ==================== 4 ======================== //
// const sumDuplicate = (arr) => {
//   let result = new Number();
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < i; j++) {
//       if (arr[i] === arr[j]) {
//         result += arr[i];
//       }
//     }
//   }
//   return result;
// };
// console.log(sumDuplicate([10, 20, 40, 10, 50, 30, 10, 60, 10]));

// let arr = [10, 20, 40, 10, 50, 30, 10, 60, 10];
// function duplicateSum(arr) {
//   let newArr = arr.filter(
//     (item) => arr.indexOf(item) !== arr.lastIndexOf(item)
//   );
//   console.log(newArr);
//   return newArr.reduce((a, b) => a + b, 0);
// }
// console.log(duplicateSum(arr));

// ==================== 5 ======================== //
// BATU GUNTING KERTAS GAME
// function game(userPick) {
//   let value = "";
//   let result = "";
//   // membuat random number
//   function getValue() {
//     let randomNumber = Math.floor(Math.random() * 100);
//     if (randomNumber >= 66) {
//       value = "rock";
//     } else if (randomNumber <= 33) {
//       value = "paper";
//     } else {
//       value = "scissor";
//     }
//     return value;
//   }
//   getValue();
//   // rock length = 4
//   // paper length = 5
//   // scissor length = 7
//   function winLose() {
//     if (userPick.length === 4 && value.length === 7) {
//       result = "Win";
//     } else if (userPick.length === 7 && value.length === 5) {
//       result = "Win";
//     } else if (userPick.length === 5 && value.length === 4) {
//       result = "Win";
//     } else if (userPick.length === 4 && value.length === 5) {
//       result = "Lose";
//     } else if (userPick.length === 7 && value.length === 4) {
//       result = "Lose";
//     } else if (userPick.length === 5 && value.length === 7) {
//       result = "Lose";
//     } else result = "Draw";
//   }
//   winLose();
//   console.log(value);
//   return result;
// }
// console.log(game("rock"));
// console.log(game("scissor"));
// console.log(game("paper"));
