import React from 'react'

export default function PageStount(props) {
 const stound = props.date.map(it=>(<li key={it.id}><span>{it.name}</span><span>{it.id}</span>
  <span>{it.sex === 0 ?  '男': '女'}</span>
  </li>))
  return (
    <>
        {stound}
    </>
    )
}
