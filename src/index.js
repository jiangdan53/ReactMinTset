import dva  from 'dva'
import  Number from './Dav/model/number'
import dvaApp from './Dav/DavContent/dvaApp'
import {createBrowserHistory} from 'history'
const logg =  store=>next=>action=>{
    console.log('自定义的中间件',store.getState())
    next(action)
    console.log('自定义的中间件','旧数据',store.getState())
}

const app = dva({
    history:createBrowserHistory(),
    initialState: {
        number:13
    },
    // onError(err,dispatch){
    //     //程序出现错误可以在这个函数中处理
    //     console.log(err,dispatch)
    // },
    // onAction:logg
    // onAction:[logg]
    // onStateChange(state){
    //     console.log(state)
    // },
    // onReducer(reducer){
    //         return  function(state,action){
    //             console.log(state,action)
    //             return reducer(state,action)
    //         }
    // },
        // onEffect(oldeffcet,sagaeffcet,modelObj,actionType){
        //     return  function*(...arge){
        //             console.log(oldeffcet,sagaeffcet,modelObj,actionType)
        //             yield oldeffcet(...arge)
        //         }
        // },
        // extraReducers:{
        //  //用于添加其他reducer到仓库中
        //     onadd(state = 12,action){
        //         return state
        //     }
        // },
        extraEnhancers:[function(createStore){
            //这里的执行顺序为先进先出 印射到内存栈中为先进后入栈
            return  function(...arge){
                console.log('你即将创建一仓库')
                 return createStore(...arge)
            }   
        }]
})
app.model(Number)
app.router(dvaApp)
app.start('#root')