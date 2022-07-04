/*
作用 ：用于指定导航链接，完成路由跳转

语法说明： 组件通过to属性指定路由地址，最终会渲染为a链接元素
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
