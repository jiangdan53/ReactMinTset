import React from 'react'
import ctx  from './Router-Context'
export default function witiRoute(Comp) {               
    function RouterWrapper(props){
        return <ctx.Consumer>
            {value=>{
                return  <Comp value={value} {...props}/>
            }}
        </ctx.Consumer>
    }    
    RouterWrapper.displayName = `(${Comp.displayName || Comp.name })RouterWrapper`                                   
  return RouterWrapper
}
