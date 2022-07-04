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
          <Route path="board" element={<Board></Board>}></Route>
          <Route path="artical" element={<Artical></Artical>}></Route>
        </Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
