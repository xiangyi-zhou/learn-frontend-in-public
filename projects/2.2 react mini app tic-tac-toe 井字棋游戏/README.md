# Tic-tac-toa 井字棋游戏

玩法设计代码来自 React [官方教程](https://react.dev/learn/tutorial-tic-tac-toe)

[选择创建轻量级的 React App](https://react.dev/learn/build-a-react-app-from-scratch)

```bash
npm create vite@latest my-app
```

- Vite React 项目典型结构（TS 模板）

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
   │   └─ Greeting.tsx
   ├─ assets/            ← 项目图片/图标等资源
   └─ index.css          ← 全局样式
```

复习过 HTML+CSS+JS，很容易理解 index.html 在 React 项目中依然是入口，以及 components 中多个可复用的组件的概念，但是为什么项目中还包含 main.tsx 和 App.tsx？

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

Q：以上的这种写法是否是必须得？

React 允许自由架构，但 main.tsx + App.tsx 是最主流、最易维护的做法
