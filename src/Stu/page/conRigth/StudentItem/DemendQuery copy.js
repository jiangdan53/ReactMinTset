import React, { useState, useEffect } from 'react'
import { useNavigate, useSearchParams, useLocation } from 'react-router-dom'
import { GetStuDate } from '../../../../unit/SumTool'
import StudentList from '../studentList'
import PangingNumber from '../../../../PaGing/PaGingNumber/pangingNumber'
import '../../../../PaGing/css/paging.css'
import Search from '../search/search'
import studentList from '../studentList'
function getUrlDate(conut, date) {//整合数据
  let newDate
  if (date.page === 0) {
    newDate = conut
  } else {
    newDate = Object.assign({}, conut, date)
  }
  return newDate
}
function useGetDate(Urldate) {//请求数据
  const [StudentDate, setStudentDate] = useState()
  useEffect(() => {
    (async () => {
      let date = await GetStuDate({ page: Urldate.page, size: Urldate.size, sex: Urldate.RnValue, search: Urldate.emlValueIn })
      setStudentDate(date)
    })()

  }, [Urldate])
  return [StudentDate]
}
export default function DemendQuery() {
  let navigate = useNavigate()
  const [searchParams, setSearchPaeams] = useSearchParams();
  const [emlValue, setemlValue] = useState({ emlValueIn: '', RnValue: -1, page: 1, size: 10 })
  let newSex = { emlValueIn: searchParams.get('search'), RnValue: +searchParams.get('sex'), page: +searchParams.get('page'), size: +searchParams.get('size') }
  let newUrlDate = getUrlDate(emlValue, newSex)
  useEffect(() => {
    setemlValue(newUrlDate)
  }, [])
  let [StudentDate] = useGetDate(emlValue)
  function GetSearchDate(date) {
    let newDate = Object.assign({}, emlValue, date, { page: 1 })
    setemlValue(newDate)
    navigate(`?search=${newDate.emlValueIn}&sex=${newDate.RnValue}&page=${newDate.page}&size=${newDate.size}`)
  }
  if(StudentDate){
    return (
      <div className='DemQuery'>
        <Search GetSdate={GetSearchDate} UrlSea={{ emlValueIn: emlValue.emlValueIn, RnValue: emlValue.RnValue }} />
        <div>
          {StudentDate.date.length !== 0 ? <StudentList date={StudentDate.date} /> : 'meshi1'}
        </div>
        <div>
  
          {StudentDate.cont !== 0 ? <PangingNumber OnCheng={(page) => {
            let newDate = Object.assign({}, emlValue, { page })
            setemlValue(newDate)
          }} Arrr={{ pageindex: emlValue.page, datalength: StudentDate.cont, maxpage: 5, pagequantity: emlValue.size }} /> : '加载中'}
        </div>
      </div>
    )
  }else{
    return <></>
  }
  }
  
  
