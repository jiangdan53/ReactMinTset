/* eslint-disable import/no-anonymous-default-export */
export default (...middleware)=>{
    if(middleware.length ===  0){
        return arge => arge;
    }else if(middleware.length === 1){
        return middleware[0] ;
    }
    //方式一
    return  middleware.reduce((a,b)=>(...arge)=>a(b(...arge)));//该返回的是一个新的函数
  
 
    //方式二
    // return function(...agrs){
    //     let waerFun =  null;//该变量用于缓存参数便于向后传递值
    //     for(let i = middleware.length-1; i >= 0 ; i-- ){
    //         const mid = middleware[i]
    //         if(  i  ===  middleware.length-1){
    //             waerFun = mid(agrs)
    //         }else{
    //             waerFun = mid(waerFun)
    //         }
    //     }
    // }
}
