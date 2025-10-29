/*******************************************************
 * JS Template Script
 * 用途：快速恢复 JavaScript 语感 & 结构思维
 * 运行方式：node template.js
 *******************************************************/

// 1️ 基本变量与常量声明
let count = 0; // 可变变量
const appName = "JS Demo"; // 不可变常量  // JS 推荐驼峰式命名

console.log(`🚀 Starting ${appName} ...`); // print() in js

// 2️ 函数与箭头函数
function add(a, b) {
  return a + b;
}

const multiply = (a, b) => a * b;

console.log("Add:", add(2, 3));
console.log("Multiply:", multiply(2, 3));

// 3️ 对象与数组
const user = {
  userName: "Alice", // js中对象类似动态字典+方法
  age: 99,
  skills: ["Python", "JavaScript", "Magic"],
};
console.log("User:", user);

// 解构赋值
const { userName, age } = user;
console.log(`User name: ${userName}, age: ${age}`); // 模版字符串，类似 Python 中的 f-string

// 4️ 类与实例
class Developer {
  constructor(userName, stack) {
    this.userName = userName;
    this.stack = stack;
  }

  sayHi() {
    console.log(`👩‍💻 Hi, I'm ${this.userName}, I use ${this.stack.join(", ")}.`);
  }
}

const dev = new Developer("Lily", ["React", "TypeScript", "Node.js"]);
dev.sayHi();

// 5️ 异步编程：Promise + async/await
function fetchDataMock() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ message: "Data loaded successfully!" });
      reject({ message: "Data loading failed!" });
    }, 1000);
  });
}

// 另一种写法，将箭头函数展开
// function fetchDataMock() {
//   return new Promise(function (resolve, reject) {
//     // 模拟异步操作
//     setTimeout(function () {
//       resolve({ message: "Data loaded successfully!" });
//       reject({ message: "Data loading failed!" });
//     }, 1000);
//   });
// }

async function runAsyncDemo() {
  console.log("⏳ Fetching data...");
  const data = await fetchDataMock();
  console.log("✅ Response:", data.message);
}

runAsyncDemo();

// 6️ 控制流与数组方法
const numbers = [1, 2, 3, 4, 5];

// for...of
for (const n of numbers) {
  console.log("Square:", n ** 2);
}

// map + filter + reduce 链式函数写法
const processed = numbers
  .filter((n) => n % 2 === 0) // 过滤偶数，这三个是数组内置函数
  .map((n) => n * 10) // 每个数乘以10
  .reduce((acc, n) => acc + n, 0); // 累加结果

// 可读性更强的另一种写法
// const evenNumbers = numbers.filter(n => n % 2 === 0);
// const multiplied = evenNumbers.map(n => n * 10);
// const sum = multiplied.reduce((acc, n) => acc + n, 0);
// const processed = sum;

console.log("Processed result:", processed);

// 7️ 模块化（仅 Node 环境下）
// 在其他文件中：
// export function sayHello(name) { return `Hello, ${name}!`; }
// 然后在此处导入：
// import { sayHello } from './module.js';
