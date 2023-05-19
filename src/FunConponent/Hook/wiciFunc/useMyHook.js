/* eslint-disable react-hooks/rules-of-hooks */
import {useState,useEffect, useCallback} from 'react'
import GetData  from '../../../unit/SumTool'
export default function uesDate(pageindex,limits) {
    const [stulent, setstulent] = useState();
    useEffect(()=>{ 
      // const [state, dispatch] = useReducer(first, second, third)
      // useMemo(() => first, [second])
      // useCallback(
      //   () => {
      //     first
      //   },
      //   [second],
      // )
      
        //  GetData({url:'/api/student/findByPage',page:index,length:pageLength}).then(res=>setstulent(res.findByPage))
          (async()=>{
              let data = await GetData({url:'/api/student/findByPage',page:pageindex,length:limits})
              setstulent(data)
                return ()=>{
                    console.log(111)

                }
                })()
      },[pageindex, limits])
    return [stulent,]    

}

