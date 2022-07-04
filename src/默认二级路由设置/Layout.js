//引入outlet方法
import { Outlet } from 'react-router-dom'
function Layout () {
  return (
    <div>
      Layout
      {/* 二级路由出口 需要展示在哪 */}
      <Outlet></Outlet>
    </div>
  )
}

export default Layout