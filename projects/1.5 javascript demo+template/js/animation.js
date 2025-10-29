// animation.js: 封装简单动画

// 将元素从左到右移动 200px
export function moveRight(selector) {
  const el = document.querySelector(selector);
  if (!el) return;
  let pos = 0;

  function frame() {
    pos += 2; // 每次移动2px
    el.style.left = pos + "px";
    if (pos < 200) {
      requestAnimationFrame(frame); // 递归调用，动画平滑
    }
  }

  requestAnimationFrame(frame);
}
