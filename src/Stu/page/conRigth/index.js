import React, { Component,createContext,useContext} from 'react'
import Inlogin from '../../../unit/RouterState'
import Item from '../Item'
import {RouterContext}  from '../../Router-v6'
import MacthParams from '../../MyRouter/MacthParams'
import '../../MyRouter/index'
import { Link,Routes,Route,useNavigate ,useParams,useSearchParams,useLocation} from 'react-router-dom'

function AmthProvider(){

}

 function Go (){
  let usenavigate  = useNavigate()
  const loac = useLocation() //拿到地址栏的信息
  const [searchPaeams,setSearchPaeams] = useSearchParams()
  let use =  useParams()
  function handleclick (){
    // usenavigate('?'+state.id+state.name)
    // setSearchPaeams(state)
    // setSearchPaeams({name:'nihia',age:18})//设置地址栏的数据
    usenavigate(-1)
  }
  function getX () {
    Inlogin.b()
    if(loac.pathname === '/'){
      if(Inlogin.Amout === true){
        let  url = loac.state.path
        usenavigate(url)
      }
    }
    
  } 
  return <>
  <button onClick={handleclick}>点击获取最新消息</button>
  <button onClick={getX} >登录</button>
  <p>当前新闻为{loac.search}年{use.name}月{use.id}日的最新消息</p>
  <Link to='dd'>当前页的子路由</Link> 
  </>
}
export default class index extends Component {
  componentDidMount(){
  }
render() {
  return (
    <div >{this.props.tlele} <Go />
    <RouterContext />
    <Routes>
      <Route path='/' element={<Item/>} />
      <Route path='conswme/dd'/>
    </Routes>
    </div>

  )
}
}



