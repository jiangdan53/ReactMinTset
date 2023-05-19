    
// export const GetData = async (obj) => {
//   const testappkey =  'demo13_1545210570249'
// let page = (obj.page ? `&page=${obj.page}&size=${obj.length}` : '') 
// let dates = await fetch(`${obj.url}?appkey=${testappkey}${page}`)
// .then(res=>res.json())
// .then(res=>res.data)
// return dates 
// }
// export default async function  GetDate(obj){
//   const testappkey =  'demo13_1545210570249'
// let page = (obj.page ? `&page=${obj.page}&size=${obj.length}` : '') 
// let dates = await fetch(`${obj.url}?appkey=${testappkey}${page}`)
// .then(res=>res.json())
// .then(res=>res.data)
// return dates 
// }

export  async function GetDate(obj) {
  const testappkey =  'demo13_1545210570249'
let page = (obj.page ? `&page=${obj.page}&size=${obj.length}` : '') 
let dates = await fetch(`${obj.url}?appkey=${testappkey}${page}`)
.then(res=>res.json())
.then(res=>res.data)
return dates 
}
export async function GetStuDate(obj){
  let object = Object.assign({},{
    search:'',
    sex:0,
    page:1,
    size:10
  },obj)
  let datas
  if(object.search !== ''){
    datas =  await fetch(`/api/student/searchStudent?appkey=demo13_1545210570249&sex=${object.sex}&search=${object.search}&page=${object.page}&size=${object.size}`)
    .then(res=>res.json())
    .then(res=>res.data)  
    datas.date = datas.searchList
      delete datas.searchList
  }else{
    datas =  await fetch(`/api/student/findByPage?appkey=demo13_1545210570249&page=${object.page}&size=${object.size}`)
    .then(res=>res.json())
    .then(res=>res.data)  
    datas.date = datas.findByPage 
      delete datas.findByPage
  }
  // datas =  await fetch(`/api/student/findByPage?appkey=demo13_1545210570249&page=${object.page}&size=${object.size}`)
  //   .then(res=>res.json())
  //   .then(res=>res.data)  
  //   datas.date = datas.findByPage 
  //     delete datas.findByPage

  return datas
}
export async function GetStudentAll(){
let dates;
dates = await  fetch(`/api/student/findAll?appkey=demo13_1545210570249`).then(res=>res.json()).then(res=>res.data)
return dates
}
export async function GetText(){
   let date = new Promise(res=>
    setTimeout(()=>{
      res([{name:'1'},{name:'1'},{name:'1'}])
    },2000))
    return date
  
}