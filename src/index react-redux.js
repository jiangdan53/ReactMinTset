import React from "react";
import  ReactDOM  from "react-dom";
import App from './App'
import store from './ReactAnReduxConpenment/Redux'
import  {Provider}from 'react-redux'
import {ConnectedRouter}from 'connected-react-router'
import history  from './ReactAnReduxConpenment/Redux/history'
import Student  from './ReactAnReduxConpenment/dateContainer/Student'
import Welcom from './ReactAnReduxConpenment/dateContainer/StudPage/welcome'    
import {Route,Routes} from 'react-router-dom'

ReactDOM.render(<>

    <Provider store={store}>
    <ConnectedRouter history={history}>
    <Routes>
    <Route path='/' element={<App/>} >
    <Route path="/" element={<Welcom/>}/>
    <Route path="student" element={<Student/>}/>
    </Route>
    </Routes>
    </ConnectedRouter>
   
    </Provider>

</>,document.getElementById('root'));

