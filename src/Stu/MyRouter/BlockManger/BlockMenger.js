export default class BlockMenger {
    prompt = null;
    constructor(fun){
        this.getUserConfirmation = fun
    }
    /**
     * 设置一个提示消息
     * @param {*} msg 可以是一个字符串也可以是一个函数 函数返回一个字符串消息
     */
    block(msg){
        if(typeof msg !== 'string' && typeof msg !== 'function'){
            throw new TypeError('block must be string or  function')
        }
        this.prompt = msg
       return ()=>{
           this.prompt = null
       }
    }
    triggerBlock(location,action,clbck){
        if(!this.prompt){
            clbck()
            return  ;
        }
        let msgaer;
        if(typeof this.prompt === 'string'){
            msgaer = this.prompt
        }else if(typeof this.prompt === 'function'){
         msgaer = this.prompt(location,action)
        }
        this.getUserConfirmation(msgaer,reut =>{
          if(reut === true){
              clbck()
          }
        })
    }
}