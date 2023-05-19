/* eslint-disable react-hooks/rules-of-hooks */
import React,{useState} from 'react'
import LeftList from './navList/lfetList'
import StuLiset from './tabelist/StuLiset'
export default function list({OnChenge,date}) {
  console.log('数据组件更新了')
  return (

    <>
        <LeftList>
       </LeftList>
    <StuLiset {...date} OnChenge={OnChenge}>
    </StuLiset>
    </>
  )
}
