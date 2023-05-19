import BlockMenger from './BlockManger/BlockMenger'
import ListenerManager from './ListenerManager/ListenerManager'

export default function MyBrowserHistory (options = {}){
    const {basename='',
            forceRefresh =  false,
            keyLength =  6 ,
            getUserConfirmation = (msg,clbk)=>{
                clbk(window.confirm(msg))
            }
    } = options
    const blockManager = new BlockMenger(getUserConfirmation)
    const  listenerManager = new ListenerManager()
 let location = GetLocation(basename)
 function  changePush(path,state,ispush){
    const pathInfo =  handlePathAndState(path,state,basename)
    let action = 'PUSH'
    if(!ispush){
      action = 'REPLACE'
    }
   
    let  location = GetLocationBasFrom(pathInfo,basename)
    blockManager.triggerBlock(location,action,()=>{
        if(ispush){
            window.history.pushState({key:createk(keyLength),state:pathInfo.state},null,pathInfo.path)
          
        }else{
            window.history.replaceState({key:createk(keyLength),state:pathInfo.state},null,pathInfo.path)
    
        }
        listenerManager.trigeListener(location,action)
        Myloaction.action = action
        Myloaction.location = location
        if(forceRefresh){
            window.location.href =  pathInfo.path
        }
    })
   
}
 function go(step){
    window.history.go(step)
    }
    function goForward(){
        window.history.forward()
    } 
    function goBack(){
        window.history.back()
    }
     /***
         * @param {*}path 新的地址可以是一个对象
         * @param {*}state 附带的状态数据，如果第一个参数为对象则该参数无效 
         */
    function push(path,state){
    //     Myloaction.action = 'PUSH'
    //   const pushInfo =  handlePathAndState(path,state,basename)
    //   window.history.pushState({key:createk(keyLength),state:pushInfo.state},null,pushInfo.path)
    //   Myloaction.location = GetLocation(basename)
    //   if(forceRefresh){
    //       window.location.href =  pushInfo.path
    //   }
    changePush(path,state,true)
    }
    function  replace(path,state){
        // Myloaction.action = 'REPLACE'
        // const pushInfo =  handlePathAndState(path,state,basename)
        // window.history.replaceState({key:createk(keyLength),state:pushInfo.state},null,pushInfo.path)
        // Myloaction.location = GetLocation(basename)
        // if(forceRefresh){
        //     window.location.href =  pushInfo.path
        // }
    changePush(path,state,false)

    }
    function listener(Listener){
        return listenerManager.Listener(Listener)
    }
   function block(prompt){
        blockManager.block(prompt)
    }
    function refRouter(location){
        let  {pathname = '/',search = '', hash= ''} = location
        if(search.charAt(0)=== '?' && search.length===1 ){
            console.log(1)
            return basename +  pathname 
        }else{
            return  basename + pathname + search +  hash

        }
    }
    function ListenerDom(){
        window.addEventListener('popstate',()=>{
        let location  = GetLocation(basename)
        blockManager.triggerBlock(location,'POP',()=>{
            listenerManager.trigeListener(location,'POP')
            Myloaction.location = location
        })
        })
    }
    ListenerDom()
 const Myloaction = {
     action:'POP',
     location,
     length:window.history.length,
     go,
     goBack,
     goForward,
     push,
     replace,
     listener,
     block,
     refRouter
 }
return Myloaction
}

function handlePathAndState(path,state,basename){
    if( typeof path  === 'string'){
        return {
            path,
            state
        }
    }else if(typeof path === 'object'){
        let pathResult = path.pathname;
        let  {search = '',hash = ''} = path
        if(search.charAt(0) !== '?'){
            search = `?${search}`
        }
        if(hash.charAt(0) !== '#'){
            hash = '#' + hash
        }
        pathResult += search;
        pathResult += hash;
        return  {
            path:pathResult,
            state:path.state
        }
    }else{
        throw new TypeError('path must be string or object') 
    }
}
function GetLocation(basename = ''){
    const Wloac  = window.location
    const reg = new RegExp(`^${basename}`)
    let MyPathname,Mystate  ,historyState = window.history.state;
    
    if(Wloac.pathname === basename){
        MyPathname = Wloac.pathname
    }else{
        MyPathname = Wloac.pathname.replace(reg,'');
    }
    const Myloaction =   {
        hash:Wloac.hash,
        pathname:MyPathname,
        search:Wloac.search,
        state:''
    }
    if(historyState === null){
        Mystate = undefined
    }else if(typeof historyState !== 'object'){
            Mystate =  historyState
    }else{
        if('key' in historyState){
        Myloaction.key = historyState.key
        Mystate = historyState.state
        }else{
            Mystate = historyState
        }
    }
    Myloaction.state = Mystate
    return Myloaction
}
function GetLocationBasFrom(pathInfo,basename =  ''){
    const reg = new RegExp(`^${basename}`)
    let  pathname = pathInfo.path.replace(/[#?].*$/,'');

    if(pathname !== basename){
        pathname = pathname.replace(reg,'')
    }else{
        pathname =  basename
    }
    const searchindex =  pathInfo.path.indexOf('?')
    const hasindex =  pathInfo.path.indexOf('#')
    let search;
    if(searchindex  === -1  || searchindex > hasindex){
            search = ''
    }else{
        search = pathInfo.path.substring(searchindex,hasindex)
    }
    let hash;
    if(hasindex === -1){
        hash = ''
    }else{
        hash = pathInfo.path.substring(hasindex)
    }
    let loac = {
        hash,
        pathname,
        search,
        state:pathInfo.state
        
    }
    return loac
}
function  createk(length){
    return Math.random().toString(32).substring(2,length)
}
