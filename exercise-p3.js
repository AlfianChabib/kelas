// ========================================================= //
// const input = 9;
// const init = 10;

// for (let i = 1; i <= init; i++) {
//   console.log(`${input} * ${i} = ${i * input}`);
// }

// ========================================================= //
// const str = "madam";
// const str2 = "madan";
// if (str === "madam") {
//   console.log(`"${str}" is a palindrome`);
// } else {
//   console.log(`"${str}" is not a palindrome`);
// }

// ========================================================= //
// let cm = 100000;
// let km = cm / 100000;
// console.log(km, "km");

// ========================================================= //
// let number = 1000;
// let idr = number.toLocaleString("id-ID", {
//   currency: "IDR",
//   style: "currency",
// });
// console.log(idr);

// ========================================================= //
// let str = "Hello world";
// let srt2 = str.split("ell").join("");
// console.log(srt2);

// ========================================================= //
// function camelize(str) {
//   return str.replace(/(\[A-Z]|\b\w)/g, function (word) {
//     return word.toUpperCase();
//   });
// }
// console.log(camelize("hello world"));

// ========================================================= //
// let str = "hello";
// semua string di pisah menjadi array menggunakan spread operator
// console.log([...str]); // ['h', 'e', 'l', 'l', 'o']

// ========================================================= //
// let asal = [1, 2, 3, 4, 5];
// console.log(asal.reverse()); // [5, 4, 3, 2, 1]
// console.log(asal.join("")); // 12345
// reverse = (str) => [...str].reverse().join("");
// console.log(reverse("hello"));

// ========================================================= //
// let str = "The QuiCk BrOwN Fox";
// let str2 = [];
// for (let i = 0; i < str.length; i++) {
//   if (str[i] === str[i].toUpperCase()) {
//     str2.push(str[i].toLowerCase());
//   } else {
//     str2.push(str[i].toUpperCase());
//   }
// }
// console.log(str2);
// console.log(str2.join(""));

// ========================================================= //
// function find(a, b) {
//   if (a > b) {
//     return a;
//   } else {
//     return b;
//   }
// }
// console.log(find(42, 27));

// ========================================================= //
// let nums = [42, 27, 18];
// for (let i = 0; i < nums.length; i++) {
//   for (let j = i + 1; j < nums.length; j++) {
//     if (nums[i] > nums[j]) {
//       let temp = nums[i];
//       nums[i] = nums[j];
//       nums[j] = temp;
//     }
//   }
// }
// console.log(nums);

// ========================================================= //
// function checkType(data) {
//   if (typeof data === "string") {
//     return 1;
//   } else if (typeof data === "number") {
//     return 2;
//   } else if (typeof data === "object" || typeof data === "array") {
//     return 3;
//   } else {
//     console.log("masukkan data");
//   }
// }
// console.log(checkType("hello"));
// console.log(checkType(1000));
// console.log(checkType([1, 2, 3]));
// console.log(checkType({ 1: "hello", 2: "world", 3: "!" }));

// ========================================================= //
// let example = "An apple a day keeps the doctor away";
// console.log(example.replace(/a/gi, "*"));
