/* eslint-disable react-hooks/rules-of-hooks */
import React ,{useState} from 'react'

import List from './lists'
export default function lfetList() {
    
    const [listName, setlistName] = useState({list:[{title:'学生列表',to:'/student'},{title:'添加学生',to:'/student/add'},{title:'课程列表',to:'/courselist'},{title:'添加课程',to:'/course/add'}]})
    return (
        <div className='lift-list'>
            <List {...listName}/>
        </div>
    )
}
