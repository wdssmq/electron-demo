### 解决 electron 安装的问题

```bash
pnpm config set ELECTRON_MIRROR https://npmmirror.com/mirrors/electron/
rm -rf node_modules
pnpm install
pnpm approve-builds

# Linux 下
export ELECTRON_MIRROR=https://npmmirror.com/mirrors/electron/
rm -rf node_modules/electron node_modules/.pnpm/electron@*
pnpm install

```

### pnpm 执行 electron-forge import

注：项目内的 forge 版已执行过该命令；

```bash
pnpm install --save-dev @electron-forge/cli
pnpm approve-builds

pnpm config set node-linker hoisted
pnpm exec electron-forge import

```

### 使用 electron-vite

本仓库中的 vite 版基于下边的脚手架创建，删除了图片素材并添加了 VSCode 的调试配置；

```bash
pnpm create vite@latest electron-vite-demo2

cd electron-vite-demo2
pnpm config set ELECTRON_MIRROR https://npmmirror.com/mirrors/electron/
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

### installer.nsh

可为 electron-builder 提供安装和卸载时的事件处理；

```json
// electron-builder.json
{
  // ...
  "nsis": {
    // 已有选项…………
    "include": "installer.nsh"
  }
}
```

```nsh
; 安装后事件处理
!macro customInstall
  ; 创建 AppData\Roaming\electron-vite-demo 目录
  CreateDirectory "$APPDATA\electron-vite-demo"
  
  ; 复制配置文件到用户目录，${PROJECT_DIR} 为项目根目录
  SetOutPath "$APPDATA\electron-vite-demo"
  File "${PROJECT_DIR}\path\config.yaml"
!macroend

; 卸载前事件处理
!macro customUnInstall
  ; 删除用户配置目录（可选）
  ; RMDir /r "$APPDATA\ai-jumon"
!macroend

```

### 示例代码

示例预览 | Electron
https://www.electronjs.org/zh/docs/latest/tutorial/examples
