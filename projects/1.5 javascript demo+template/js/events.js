// events.js: 封装事件绑定函数

export function bindClick(selector, callback) {
  const el = document.querySelector(selector);
  if (el) el.addEventListener("click", callback);
}

export function bindInput(selector, callback) {
  const el = document.querySelector(selector);
  if (el) el.addEventListener("input", callback);
}
