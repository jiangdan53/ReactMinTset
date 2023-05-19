import cmdFun from "./utli/cmdFun";
/* eslint-disable import/no-anonymous-default-export */
export default (...middleware)=>{//中间件函数参数
    return function(createStore){//仓库创建函数
        return function(reducer,state){
            const store = createStore(reducer,state);
          
            //创建dispatch函数
            let dispatch = ()=>{ throw new TypeError('be masut one call no undefed')}
            const middDsipatch = {
                dispatch:(...ager)=>dispatch(...ager),
                getState:store.getState
            }
            //的到dispatch创建函数
            let applyMiddleware = middleware.map(md=>md(middDsipatch))
            //拿到所有中间件函数所赋值的dispatch
            //方式一 
            //先拿到函数式编程的函数所返回的所有dispatch最终结果然后传入原始的dispatch
        //    const dispatchFun = cmdFun(...applyMiddleware)
        //    dispatch = cmdFun(...applyMiddleware)
        //方式二
        //因为我们的函数执行会返回一个函数 
        //所以我们可以使用下面的这种方式
        dispatch = cmdFun(...applyMiddleware)(store.dispatch)
        //上面的这种方式是先得到cmdFun执行后得结果 该结果是以个函数并且接收初始值所以他的过程是
        // newcmdFun=cmdFun(...applymiddleware)
        // dispatch =   newCmdFun(原始得值)
            return {
                ...store,
                dispatch,
            }
        }
    }
}