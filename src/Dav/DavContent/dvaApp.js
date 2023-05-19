import React from "react"
import App from "./numberCom"
import Lun from '../../Conponents/Banner'
import {Route,routerRedux,Router,withRouter,Switch,BrowserRouter, NavLink} from 'dva/router';
function  Home(){
    return <>
     <div className="lll">主页</div>
     <div>
    <Lun />
   </div>
    </>
}

export default function(props) {
  return <>
      <ul>
        <li><button  onClick={()=>{
        props.app._store.dispatch(routerRedux.push('/'))
        }}>首页</button></li>
        <li><button onClick={()=>{
            props.app._store.dispatch(routerRedux.push('/number'))
        }}>计数器</button></li>
      </ul>
  <routerRedux.ConnectedRouter history={props.history} >
  <Switch>
  <Route exact path='/' component={Home} />
  <Route exact path='/number' component={App} />
  </Switch>
</routerRedux.ConnectedRouter>
  </> 
}