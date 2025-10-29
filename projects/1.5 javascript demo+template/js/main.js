// main.js: 主入口，组合各模块功能

import { updateContent, addListItem, clearList } from "./dom.js";
import { bindClick, bindInput } from "./events.js";
import { fetchDataMock, processNumbers } from "./data.js";
import { moveRight } from "./animation.js";

// --- DOM + 异步 ---
bindClick("#greetBtn", async () => {
  const name = document.querySelector("#nameInput").value;
  const data = await fetchDataMock(); // 异步模拟获取数据
  updateContent("#content", `${data.message}，你好 ${name}！`);
});

// --- 数组处理 ---
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
bindClick("#processNumbersBtn", () => {
  clearList("#numberList");
  numbers.forEach((n) => addListItem("#numberList", `原始值: ${n}`));
  const result = processNumbers(numbers);
  addListItem("#numberList", `处理后总和: ${result}`);
});

// --- 动画 ---
bindClick("#animateBtn", () => {
  moveRight("#animateBox");
});
