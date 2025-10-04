# React 工程化模板

一个高度工程化的 Next.js + TypeScript 项目模板，开箱即用。

[![CI](https://github.com/yourusername/react-template/workflows/CI/badge.svg)](https://github.com/yourusername/react-template/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 技术栈

- **框架**: Next.js 15 + React 18 + TypeScript
- **样式**: Tailwind CSS + shadcn/ui
- **状态**: Zustand + TanStack Query
- **测试**: Vitest + Playwright
- **工具**: ESLint + Prettier + Husky

## 快速开始

### 使用此模板

点击 GitHub 的 **Use this template** 按钮创建新仓库。

### 本地开发

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建生产版本
pnpm build
```

打开 [http://localhost:3000](http://localhost:3000) 查看应用。

## 主要命令

```bash
pnpm dev              # 开发服务器
pnpm build            # 生产构建
pnpm start            # 启动生产服务器
pnpm lint             # 代码检查
pnpm format           # 代码格式化
pnpm type-check       # 类型检查
pnpm test             # 单元测试
pnpm test:e2e         # E2E 测试
```

## 代码质量标准

### 自动检查

- **复杂度**: 单函数最大圈复杂度 10
- **嵌套**: 最大嵌套深度 3
- **长度**: 单函数最多 50 行
- **注释**: 公开 API 必须有 JSDoc
- **类型**: 禁止使用 `any`
- **覆盖率**: 测试覆盖率 ≥ 80%

### Git Hooks

提交代码时自动执行：

- 代码格式化
- ESLint 检查
- 类型检查
- 提交信息规范检查

## 提交规范

使用 [约定式提交](https://www.conventionalcommits.org/zh-hans/)：

```
feat: 新功能
fix: 修复 bug
docs: 文档更新
style: 代码格式
refactor: 重构
perf: 性能优化
test: 测试
chore: 其他
```

示例：

```bash
git commit -m "feat: 添加用户登录功能"
git commit -m "fix: 修复导航栏样式问题"
```

## 添加 UI 组件

使用 shadcn/ui：

```bash
pnpm dlx shadcn-ui@latest add button
pnpm dlx shadcn-ui@latest add card
```

## 部署

### Vercel（推荐）

1. 将代码推送到 GitHub
2. 在 [Vercel](https://vercel.com) 导入仓库
3. 自动部署

### 其他平台

构建命令: `pnpm build`
输出目录: `.next`

## 项目结构

```
src/
├── app/              # Next.js 应用目录
├── components/       # React 组件
│   └── ui/          # UI 基础组件
├── hooks/           # 自定义 Hooks
├── lib/             # 工具函数
├── stores/          # Zustand 状态管理
├── types/           # TypeScript 类型定义
└── __tests__/       # 单元测试
```

## CI/CD

每次提交和 PR 自动运行：

- 代码质量检查
- 类型检查
- 单元测试（含覆盖率）
- E2E 测试
- 生产构建

## 环境变量

复制 `.env.example` 为 `.env.local`：

```bash
cp .env.example .env.local
```

## 常见问题

**构建失败？**

```bash
rm -rf .next && pnpm build
```

**测试失败？**

```bash
pnpm test -- --clearCache
```

**Git hooks 不工作？**

```bash
pnpm run prepare
```

## 更多文档

- [贡献指南](./CONTRIBUTING.md) - 如何参与开发
- [项目配置](./SETUP.md) - 详细的配置说明

## 许可

MIT
