### 解决 electron 安装的问题

```bash
pnpm config set ELECTRON_MIRROR https://npmmirror.com/mirrors/electron/
rm -rf node_modules
pnpm install
pnpm approve-builds

```

### pnpm 执行 electron-forge import

```bash
pnpm install --save-dev @electron-forge/cli
pnpm approve-builds

pnpm config set node-linker hoisted
pnpm exec electron-forge import

```

### 使用 electron-vite

```bash
pnpm create vite@latest electron-vite-demo

cd electron-vite-demo
pnpm install
pnpm approve-builds

```

### 示例代码

示例预览 | Electron
https://www.electronjs.org/zh/docs/latest/tutorial/examples
