/*
作用：包裹整个应用，一个 React 应用只需要使用一次

两种常用 Router : HashRouter 和 BrowserRouter

HashRouter

使用 URL 的哈希值实现（http://localhost:3000/#/first）

BrowserRouter ( 推荐 )
使用 H5 的 history.pushState API 实现（http://localhost:3000/first）

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
