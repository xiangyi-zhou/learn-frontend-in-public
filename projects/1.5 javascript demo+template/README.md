# JS Frontend Template Demo

**模块化 JavaScript 前端模板**，展示了前端开发中 JS 的主要应用方法，采用 **HTML + CSS + 多 JS 模块** 的结构，HTML 和 CSS 简陋，突出 JS 方法

## 学习重点

1. **DOM 操作**：熟悉 `querySelector`、`appendChild`、`classList` 等方法
2. **事件绑定**：掌握 `addEventListener` 的用法
3. **异步编程**：理解 `Promise` 和 `async/await` 流程
4. **数组函数式方法**：`map`、`filter`、`reduce` 的链式调用
5. **动画控制**：使用 `requestAnimationFrame` 实现平滑动画
6. **模块化开发**：ES6 `import/export`，逻辑清晰可维护

## 项目结构

```
project/
├─ index.html # 页面结构
├─ style.css # 页面样式
├─ js/
│ ├─ dom.js # DOM 查询与操作函数
│ ├─ events.js # 事件绑定函数
│ ├─ data.js # 数据处理和异步函数
│ ├─ animation.js # 动画控制函数
│ └─ main.js # 主入口，组合各模块功能
```

> ├─ template.js # 独立的 js 模版，快速恢复 JavaScript 语感 & 结构思维

## 模版功能

### 1️ DOM 操作

- 获取元素、修改内容、添加/删除列表项
- 文件：`js/dom.js`
- 核心方法：
  - `getElement(selector)` → 获取元素
  - `updateContent(selector, text)` → 更新元素文本
  - `addListItem(selector, text)` → 添加列表项
  - `clearList(selector)` → 清空列表

### 2️ 事件处理

- 响应用户点击、输入等事件
- 文件：`js/events.js`
- 核心方法：
  - `bindClick(selector, callback)` → 绑定点击事件
  - `bindInput(selector, callback)` → 绑定输入事件

### 3️ 数据处理与异步操作

- 数组处理（`map`、`filter`、`reduce`）
- 模拟异步请求（Promise + async/await）
- 文件：`js/data.js`
- 核心方法：
  - `fetchDataMock()` → 模拟异步获取数据
  - `processNumbers(numbers)` → 过滤偶数、乘以 10、求和

### 4️ 动画与样式控制

- 简单动画示例：元素平滑移动
- 文件：`js/animation.js`
- 核心方法：
  - `moveRight(selector)` → 将元素从左向右移动 200px

### 5️ 模块化与主入口

- 文件：`js/main.js`
- 组合各模块功能：
  - 绑定事件
  - 异步更新 DOM
  - 数组处理显示结果
  - 动画演示

## 使用说明

1. 克隆或下载项目到本地
2. 打开 `index.html` 文件在浏览器运行
3. 主要功能：
   - 在输入框输入名字 → 点击 “打招呼” → 异步显示问候信息
   - 点击 “处理数组” → 展示数组原始值 + 处理结果
   - 点击 “动画移动” → 橙色方块水平移动动画
