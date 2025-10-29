// data.js: 封装数据处理和异步函数示例

// 模拟异步获取数据
export function fetchDataMock() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ message: "数据加载成功!" });
    }, 1000);
  });
}

// 数组处理：过滤偶数 -> 乘10 -> 求和
export function processNumbers(numbers) {
  return numbers
    .filter((n) => n % 2 === 0)
    .map((n) => n * 10)
    .reduce((acc, n) => acc + n, 0);
}
