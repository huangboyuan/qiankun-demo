import './App.css'
import { useEffect } from 'react'
import { registerMicroApps, start } from 'qiankun'

function App() {
  useEffect(() => {
    registerMicroApps([
      {
        name: 'front', //微应用的名称，微应用之间必须确保唯一(微应用中package.json中的name)
        entry: '//localhost:1101', //微应用的entry地址
        container: '#subapp-container', //微应用的容器节点的选择器
        activeRule: '/react' //微应用的激活规则
      },
      {
        name: 'vue',
        entry: '//localhost:1103',
        container: '#subapp-container',
        activeRule: '/vue'
      }
    ])
    start({ prefetch: 'all' })
  }, [])
  return (
    <div className="App">
      <div>
        <main id="subapp-container" />
      </div>
    </div>
  )
}

export default App
