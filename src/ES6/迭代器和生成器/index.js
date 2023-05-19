/* eslint-disable import/no-anonymous-default-export */
//迭代器创建函数
export default function(index,tolal){
    // iterator ={
    //  tolal :3 ,//可迭代三次
    // i : 1  ,// 当前迭代次数
    // next(){
    //     let obj ={
    //         value:this.i > this.tolal  ? undefined :  Math.random().toString(32).substring(2,7).split('').join('/'),
    //         done: this.i > this.tolal
    //     };
    //     this.i++;
    //     return obj
    // }
    //   }
    //实现斐波拉数列的第n位
//    window.iterator = {
//     a:1,//上一位的值
//     b:1,//下一位的值
//     curIndex:1,//当前为第几位
//     next(){
//         if(this.curIndex === 1 || this.curIndex === 2){
//             this.curIndex++;
//             return {
//                 value:parseInt(1) ,
//                 done:false
//             }
//         }
//         let c = this.a+this.b;
//             this.a = this.b
//             this.b = c
//             this.curIndex  ++
//         return {
//             value:parseInt(c),
//             done:false
//         }
//     }
//  }
// window.iterator = {
//          tolal :3 ,//可迭代三次
//             i : 1  ,// 当前迭代次数
//           next(){
//               let obj ={
//                   value:this.i > this.tolal  ? undefined :  Math.random().toString(32).substring(2,7).split('').join('/'),
//                   done: this.i > this.tolal
//               };
//               this.i++;
//               return obj
//           }
//      }
//      let next  = window.iterator.next()
//      while(!next.done){
//          console.log(next.value)
//          next =  window.iterator.next()
//      }
//函数所生成的迭代器
    //  return {
    //      next(){
    //          let obj ={
    //             value:index > tolal ? undefined :  Math.random().toString(32).substring(2,7).split('').join('/'),
    //             done: index > tolal
    //          }
    //          index ++
    //          return  obj
    //      }

    //  }
    //通过迭代器拿到数据里的每一位
    let i = index
    return {
            next(){
                let obj ={
                    value:tolal[i],
                    done:i > tolal.length-1
                }
                i  ++
                return obj
            }
    }
}