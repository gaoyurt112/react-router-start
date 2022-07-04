import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Board from './Board'
import Artical from './Artical'
import Login from "./Login"
import Layout from "./Layout"
function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          {/* 定义二级路由 */}
          {/* 默认二级路由 添加Index属性 把他自己的path干掉 */}
          <Route index element={<Board></Board>}></Route>
          <Route path="artical" element={<Artical></Artical>}></Route>
        </Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
