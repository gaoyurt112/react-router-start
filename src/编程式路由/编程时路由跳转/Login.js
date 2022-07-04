//导入useNavigate
import { useNavigate } from 'react-router-dom'
function Login () {
  //执行useNavigate得到一个跳转函数
  const navigate = useNavigate()
  //跳转到关于页的函数
  const goAbout = () => {
    //调用跳转函数
    navigate('/about', { replace: true })
  }

  return (
    <div>
      Login
      <button onClick={goAbout}>跳转至关于页</button>
    </div>
  )
}

export default Login