import React , {createContext,useContext} from 'react'
const AmoutContext = createContext();
export  function RouterV6(props) {
  return <AmoutContext.Provider>{props.children}</AmoutContext.Provider>
}
function AmoutConsumer(){
    return  useContext(RouterV6)
}
export function RouterContext(){
        return  null
}
