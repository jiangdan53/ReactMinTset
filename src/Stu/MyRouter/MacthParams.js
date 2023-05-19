import { pathToRegexp } from "path-to-regexp";
function getParams(UrlList,UrlArr){
    let NewParams = {}
    for( let i = 0 ;i < UrlList.length; i++){
       let Value = UrlList[i]
       let Name =  UrlArr[i].name
       NewParams[Name] =  Value
    }

    return NewParams
   
}
function DefOptions(options = {}){
    let defObj =  {
        exact:false,
        sensitive:false,
        strict:false
    }
    let obj = {...defObj,...options}
    return {
        end:obj.exact,
        sensitive:obj.sensitive,
        strict:obj.strict
    }
}
export default function  MacthParams(url,pathurl,options){
    let UrlArr = []
    const RegexpUrl = pathToRegexp(url,UrlArr,DefOptions(options))
    const UrlList = RegexpUrl.exec(pathurl) 
    if(!UrlList){
        return null;
    }
    let NewUrlList = Array.from(UrlList)
     NewUrlList = UrlList.slice(1)
    let params = getParams(NewUrlList,UrlArr)
    return {
        isExact: pathurl === UrlList[0],
        params,
        path:url,
        url:UrlList[0]
    }
}  