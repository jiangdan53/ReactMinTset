import React from 'react'
import Inlogin  from '../../unit/RouterState'
import {Navigate} from  'react-router-dom'
export default function RouteChildrnd({children}) {
  
  return Inlogin.Amout === true ? (
    children 
  ):   <Navigate to='/' state={{path:'/student/add'} }/>
  
}
