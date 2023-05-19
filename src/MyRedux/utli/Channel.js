//发布订阅模式 
export class  Channel {
    // 这是管理发布订阅者的函数对象，当订阅了后在相应的属性上给一个数据 ，当需要发布的时候从该属性中取出该值调用发布
    listeners = {}
    // 这是订阅函数，向对象中添加一位订阅者
    /**
     * 在该场景下pop为一个属性名，更出发的action一致
     * func为你发布是的时候所需要触发的函数
     * @param {*} pop 
     * @param {*} func 
     */
    take(pop,func){
        if(this.listeners[pop]){
            this.listeners[pop].push(func)
        }else{
            this.listeners[pop] = [func]
        }
    }
    put(pop,...args){
        if(this.listeners[pop]){
           
            let funcs = this.listeners[pop]
            delete this.listeners[pop];
            funcs.forEach(func =>func(...args))
        }

        //发布一个订阅
        // delete this.listeners[pop];//移除订阅
    }

}