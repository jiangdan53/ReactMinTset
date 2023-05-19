import React from 'react'
import ctx from '../react-router/Router-Context' 
import MacthParams from '../MacthParams'
export default function NavLink(props) {
    let {to,...rest} = props
  return <ctx.Consumer>
    {(value)=>{
        let loac,path;
        if(typeof to === 'object'){
            loac = to;
            path = to.pathname
        }else{
            loac = {
                pathname:to,
            }
            path = to
        }
        const href = value.history.refRouter(loac)

        let Math = MacthParams(path,value.history.location.pathname)
        if(Math){
            return  <a href={href} className='active' onClick={(e)=>{
                e.preventDefault()
                value.history.push(href)
                console.log(value)
            }}>{props.children}</a>
        }else{
            return  <a href={href} onClick={(e)=>{
                e.preventDefault()
                value.history.push(href)
                console.log(value)
            }} >{props.children}</a>

        }
    }}
  </ctx.Consumer>
}
