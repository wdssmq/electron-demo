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
pnpm create vite@latest electron-vite-demo2

cd electron-vite-demo2
pnpm install
pnpm approve-builds

```

### 打包时无法下载的文件

注：vite 版中默认使用 electron-builder，需要这些文件；

步骤：

1、下载三个压缩包；

2、解压得到三个文件夹；

注：下载和解压可以直接放入 `%LOCALAPPDATA%\electron-builder\Cache` 目录下；

3、创建两个子目录 `winCodeSign` 和 `nsis`；

4、将解压得到的文件夹分别放入对应的子目录中，`nsis-xxx` 和 `nsis-resources-xxx` 放一起；

#### PowerShell 命令

```powershell
# 创建子目录
mkdir "$env:LOCALAPPDATA\electron-builder\Cache\winCodeSign"
mkdir "$env:LOCALAPPDATA\electron-builder\Cache\nsis"

```

#### 下载地址

> winCodeSign
>
> https://github.com/electron-userland/electron-builder-binaries/releases/download/winCodeSign-2.6.0/winCodeSign-2.6.0.7z
>
> nsis
> 
> https://github.com/electron-userland/electron-builder-binaries/releases/download/nsis-3.0.4.1/nsis-3.0.4.1.7z
>
> nsis-resources
> 
>  https://github.com/electron-userland/electron-builder-binaries/releases/download/nsis-resources-3.4.1/nsis-resources-3.4.1.7z

### 示例代码

示例预览 | Electron
https://www.electronjs.org/zh/docs/latest/tutorial/examples
