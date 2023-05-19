import React from 'react'
import ctx from '../react-router/Router-Context'
export default function Link(props) {
    let { to, ...rest} = props
  return (
    <ctx.Consumer>
        {value=>{
            let loca;
                if( typeof to === 'object'){
                    loca = to
                }else{
                    loca = {
                        pathname:to,
                        search:'',
                        hash:''
                    }
                }
                const href = value.history.refRouter(loca)
            return <a href={href} onClick={(e)=>{
                e.preventDefault()
                value.history.push(href)
                console.log(value)
            }}>{rest.children}</a>
           
        }}
    </ctx.Consumer>
  )
}
