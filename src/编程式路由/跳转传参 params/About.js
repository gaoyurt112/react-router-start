
import { useParams } from 'react-router-dom'
function About () {
  let params = useParams()
  //params是一个对象
  console.log(params)
  let id = params.id
  return (
    <div>this is about 获取的参数是: {id}</div>
  )
}

export default About