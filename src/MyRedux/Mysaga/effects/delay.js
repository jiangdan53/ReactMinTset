import { call } from "./effectCall"
export  const  delay = (duration)=>{
                return call(()=>{
                    return new Promise(res=>{
                        setTimeout(()=>{
                            res()
                        },duration)
                    })
                })
}