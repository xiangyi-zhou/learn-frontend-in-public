// dom.js: 封装DOM操作函数

// 获取元素并返回
export function getElement(selector) {
  return document.querySelector(selector);
}

// 更新元素内容
export function updateContent(selector, text) {
  const el = getElement(selector);
  if (el) el.textContent = text;
}

// 添加新列表项
export function addListItem(selector, text) {
  const ul = getElement(selector);
  if (!ul) return;
  const li = document.createElement("li");
  li.textContent = text;
  ul.appendChild(li);
}

// 清空列表
export function clearList(selector) {
  const ul = getElement(selector);
  if (ul) ul.innerHTML = "";
}
