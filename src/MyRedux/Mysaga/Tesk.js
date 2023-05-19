export class  Task{
    constructor(next,cbObj){
        this.next = next  ;
        this.cbObj = cbObj;
        this.cbObj.callback  = ()=>{
           this.tre  && this.tre()
           //此处必须为箭头函数 避免this指向题
        }
    }
    
    cancel(){
        this.next(null,null,true)
    }
    toPromise(){
        return  new Promise(res=>{
            this.tre  = res
        })
    }
}
// export class Task {

//     constructor(next, cbObj) {
//         this.next = next;
//         this.cbObj = cbObj;
//         this.cbObj.callback = () => {
//             //结束了
//             this.resolve && this.resolve();
//         }
//     }

//     /**
//      * 取消当前任务
//      */
//     cancel() {
//         this.next(null, null, true);
//     }

//     /**
//      * 将当前的task转换为一个promise对象
//      */
//     toPromise() {
//         return new Promise(resolve => {
//             this.resolve = resolve;
//         })
//     }
// }