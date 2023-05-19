import React , {useRef}from "react";
import  ReactDOM  from "react-dom";
import App from './App'
import  ConRigth from '../src/Stu/page/conRigth'
import DemendQuery from "./Stu/page/conRigth/StudentItem/DemendQuery";
import Longin from '../src/Stu/loggin'
import ReouterState from './Stu/RouterState'
import {BrowserRouter as Router,Routes,Route}from 'react-router-dom'
ReactDOM.render(<>
<Router getUserConfirmation={(msg,carbak)=>{
  carbak(false)
}}>
<Routes>
    <Route path="/" element={<App/>}>
    <Route path="/" element={<ConRigth tlele='欢迎使用学生管理系统'/>}/>
    <Route path='/student' 
    element={<DemendQuery />}/>
    <Route path='/student/add' element={
    <ReouterState>
      <ConRigth tlele='恭喜你登录成功'/>
    </ReouterState>
    }/>
    <Route path='/conswme/*' element={<ConRigth tlele='课程列表'/>}/>
    <Route path='/conswme/add' element={(props)=>{
        console.log(props)
        return <ConRigth tlele='添加课程'/>
      }} >
     
    </Route>
    </Route>
    <Route path="/login"  element={<Longin/>}/>
    </Routes>
</Router>

</>,document.getElementById('root'));

