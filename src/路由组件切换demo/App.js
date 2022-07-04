//router

import About from "./About"
import Home from "./Home"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App () {
  return (
    <BrowserRouter>
      <Link to="/">首页</Link>
      <Link to="/about">关于</Link>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
