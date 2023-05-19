/* eslint-disable import/no-anonymous-default-export */


export default (action,dispacth) => {
    if(typeof  action ===  'object'){
        let res = {}
            for (const key in action) {
                if (action.hasOwnProperty.call(action, key)) {
                    const ress =  action[key]
                    if(typeof ress === 'function'){
                        res[key] = getAutoDispacthActionCreator(ress,dispacth)
                    }
                }
            }
            return res
    }else if(typeof action === 'function'){
        return  getAutoDispacthActionCreator(action,dispacth)
    }
}
function getAutoDispacthActionCreator(action,dispacth){
    return  function(...args){
     const ac =  action(...args)
       dispacth(ac)
    }
}