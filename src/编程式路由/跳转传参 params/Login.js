//导入useNavigate
import { useNavigate } from 'react-router-dom'
function Login () {
  //执行useNavigate得到一个跳转函数
  const navigate = useNavigate()
  //跳转到关于页的函数
  const goAbout = () => {
    //调用跳转函数 传入参数id = 1001  需要路径动态配合:id
    navigate('/about/1001', { replace: true })
  }

  return (
    <div>
      Login
      <button onClick={goAbout}>跳转至关于页</button>
    </div>
  )
}

export default Login