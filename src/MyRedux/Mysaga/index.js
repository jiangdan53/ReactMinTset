/* eslint-disable import/no-anonymous-default-export */
import runSaga from "./runSaga"
import { Channel } from "../utli/Channel"
export default function(){
   return function sagaMiddleware(store){
       const env = {
           store,
           channel:new Channel()
       }
        sagaMiddleware.run = runSaga.bind(null,env) 
        // bind每次调用该函数及会传入相应参数 bind的第一个参数为需要绑定的this，第二个为所向该函数传递的参数,作为该函数的第一个参数
        return function(next){
            return  function(action){
              let result = next(action)
              env.channel.put(action.type,action)
              return result
            }
        }
    }
}