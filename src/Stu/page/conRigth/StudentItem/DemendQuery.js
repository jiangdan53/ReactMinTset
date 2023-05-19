import React, { useState, useEffect } from 'react'
import { useNavigate, useSearchParams,useLocation } from 'react-router-dom'
import { GetStuDate } from '../../../../unit/SumTool'
import StudentList from '../studentList'
import PangingNumber from '../../../../PaGing/PaGingNumber/pangingNumber'
import '../../../../PaGing/css/paging.css'
import Search from '../search/search'
import Layer  from '../../../../Conponents/Montmorillonitelayer'
import './index.css'
let date ;
function getUrlDate(conut) {//整合数据
  const def = 
    { emlValueIn: '', RnValue: -1, page: 1, size: 10 }
    let NewSeaech 
    if(conut.page === 0){
      NewSeaech = Object.assign({},conut,def)
    }else{
      NewSeaech = Object.assign({},def,conut)
    }
    return NewSeaech

}
function useGetDate(Urldate) {//请求数据
  const [StudentDate, setStudentDate] = useState()
  useEffect(() => {
    (async () => {
      let date = await GetStuDate({ page: Urldate.page, size: Urldate.size, sex: Urldate.RnValue, search: Urldate.emlValueIn })
      setStudentDate(date)
    })()
      return ()=>{
      }
  }, [Urldate.page,Urldate.size,Urldate.RnValue,Urldate.emlValueIn])
  return [StudentDate]
}
function RefFun(el){
}
export default function DemendQuery() {
  let loca  = useLocation()
  let navigate = useNavigate()
  const [searchParams, setSearchPaeams] = useSearchParams();
  let newSex = { emlValueIn: searchParams.get('search')  , RnValue: +searchParams.get('sex'), page: +searchParams.get('page') , size: +searchParams.get('size')   }
  let newUrlDate = getUrlDate( newSex)
  let [StudentDate] = useGetDate(newUrlDate)

  function GetSearchDate(date) {
    let newDate = Object.assign({}, newUrlDate, date, { page:1 })
       getUrlDate(newDate)
    navigate(`?search=${newDate.emlValueIn}&sex=${newDate.RnValue}&page=${newDate.page}&size=${newDate.size}`)
    // setSearchPaeams({search:newDate.emlValueIn,sex:newDate.RnValue,page:newDate.page,size:newDate.size })
  }
    return (
      <div className='DemQuery'>
        <Search ref={RefFun} GetSdate={GetSearchDate} UrlSea={{ emlValueIn: newUrlDate.emlValueIn, RnValue: newUrlDate.RnValue }} />
       {StudentDate ? ( <div className='Query-List'>
          <StudentList date={StudentDate.date} /> 
          <PangingNumber OnCheng={(page) => {
            let newDate = Object.assign({},newUrlDate,{page})
              // navigate(`?search=${newDate.emlValueIn}&sex=${newDate.RnValue}&page=${newDate.page}&size=${newDate.size}`)

                 setSearchPaeams({search:newDate.emlValueIn,sex:newDate.RnValue,page:newDate.page,size:newDate.size })
          }} Arrr={{ pageindex: newUrlDate.page, datalength: StudentDate.cont, maxpage: 5, pagequantity: newUrlDate.size }} />
        </div> 
          )
        : <Layer  />}
       
       
      </div>
    )
 
  }
  
  
