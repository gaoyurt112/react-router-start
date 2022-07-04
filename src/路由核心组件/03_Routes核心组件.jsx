//routes 核心组件
/*
作用 ：提供一个路由出口，满足条件的路由组件会渲染到组件内部，定义path和组件的对应关系
*/
import About from '../About'
import Home from '../Home'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    //声明当前要用一个非hash模式的路由 如果需要HashRouter
    <BrowserRouter>
      {/* 指定跳转的组件 to用来配置路由地址*/}
      <Link to="/">首页</Link>
      <Link to="/about">关于</Link>
      {/* 路由出口，路由对应的组件会在这里进行渲染 */}
      <Routes>
        {/* 指定路由和组件的对应关系 path代表路径 element代表组件 */}
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
