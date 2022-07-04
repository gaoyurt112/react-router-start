import { useSearchParams } from 'react-router-dom'
function About () {
  let [params] = useSearchParams()
  console.log(params)
  //params是一个对象，对象里有一个get方法
  //用来获取对应的参数
  //把参数的名称作为get方法的实参传过来
  let id = params.get('id')
  let name = params.get('name')
  return (
    <div>this is about 获取的参数是: {id}{name}</div>
  )
}

export default About