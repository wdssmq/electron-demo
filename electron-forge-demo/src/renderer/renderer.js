const information = document.getElementById('info')
information.innerText = `本应用正在使用 Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), 和 Electron (v${versions.electron()})`

const func = async () => {
  try {
    const response = await window.versions.ping()
    console.log(response) // 打印 'pong'
  } catch (error) {
    console.error('Ping 失败:', error)
  }
}

func()
