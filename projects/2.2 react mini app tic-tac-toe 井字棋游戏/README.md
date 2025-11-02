# Tic-tac-toe 井字棋游戏

玩法设计代码来源于 React [官方教程](https://react.dev/learn/tutorial-tic-tac-toe)，示例功能简洁但扩展性高。

学习前可先 [创建轻量级的 React App](https://react.dev/learn/build-a-react-app-from-scratch)：

```bash
npm create vite@latest my-app
npm run dev
```

## Vite React 项目典型结构（TS 模板）

```
my-app/
├─ index.html            ← HTML 入口文件
├─ package.json
├─ tsconfig.json         ← TypeScript 配置
├─ vite.config.ts        ← Vite 配置
├─ node_modules/
├─ public/               ← 静态资源（图片、favicon 等）
└─ src/                  ← 源码目录
   ├─ main.tsx           ← JS/TS 入口文件
   ├─ App.tsx            ← 根组件（所有组件树从这里开始）
   ├─ components/        ← 可复用组件
   ├─ assets/            ← 项目图片/图标等资源
   └─ index.css          ← 全局样式
```

已复习 HTML+CSS+JS 的可以理解 `index.html` 作为入口，以及 `components/` 中多个可复用组件的概念。但为什么项目中还包含 `main.tsx` 和 `App.tsx` 呢？

```
index.html          ← HTML 入口，只有挂载点
      │
      ▼
main.tsx            ← React 启动器，挂载 App 到 HTML
      │
      ▼
App.tsx             ← 根组件，负责页面结构和全局逻辑
      │
      ▼
components/...      ← 各个可复用组件
```

**Q：这种写法是否必须？**
React 允许自由架构，但 `main.tsx + App.tsx` 是最主流、最易维护的做法。

## 游戏实现层级结构

| 层级   | 状态内容         | 谁控制        | 说明               |
| ------ | ---------------- | ------------- | ------------------ |
| Game   | 所有步数、当前步 | Game          | 负责保存和回溯     |
| Board  | 当前棋盘格子     | 由 Game 传入  | 负责渲染和判断胜负 |
| Square | 单个格子         | 由 Board 传入 | 只负责点击响应     |

## 关于 `useState` 的用法

[官方文档示例](https://zh-hans.react.dev/reference/react/useState)：

```typescript
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return <button onClick={handleClick}>You pressed me {count} times</button>;
}
```

使用一次 `useState`，就开启了对于函数 `setCount` 的监听，`setCount` 是 React 内置函数。

## TypeScript 的简洁用法

TypeScript 独有的 `type` 用来创建类型别名，只存在于编译期，不影响运行时。
支持非常简洁的数组语法，例如链式创建二维数组：

```typescript
type SquareValue = "X" | "O" | null;
type BoardSquares = SquareValue[]; // 一行棋盘
type History = BoardSquares[]; // 每一步棋盘的历史记录
```

TypeScript 的“多写一点”价值在于类型沿逻辑链传递和复用，在复杂应用中无需每次手动检查类型或重复判断。

```javascript
// JavaScript
const user = {
  userName: "Alice",
  age: 99,
  skills: ["Python", "JavaScript", "Magic"],
};
```

```typescript
// TypeScript
type User = {
  userName: string;
  age: number;
  skills: string[];
};

const user: User = {
  userName: "Alice",
  age: 99,
  skills: ["Python", "JavaScript", "Magic"],
};
```

Web 开发中，React + TypeScript 很少定义对象，优先使用 `type` + 函数式编程。
