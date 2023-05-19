import React,{useRef} from 'react'
import { connect } from 'dva'
import number from '../model/number';
function Number(props) {
    const inp = useRef()
    return (
        <>
        <h1>{props.number}</h1>
        <button onClick={props.OnDecrease}>-</button>
        <button onClick={props.OnIerease}>+</button>
        <button onClick={props.OnAnfDecrease}>异减</button>
        <button onClick={props.OnAnfIncrease}>异加</button>
        <input type="number" ref={inp}  />
        <button  onClick={()=>{
            const value = inp.current.value || 1;
            props.OnAdd && props.OnAdd(parseInt(value)  )
        }}>ref加</button>
        </>
    )
}
 const mapStateToProps  = state =>({
     number:state.number
 })
 
const  maDispatchToProps = dispatch=>(
    {
 
        OnDecrease:()=>{
            dispatch({
                type:'number/decrease'
            })
        },
        OnIerease:()=>{
            dispatch({
                type:'number/increase'
            })
        },
        OnAdd:(n)=>{
            dispatch({
                type:'number/add',
                payload:n
            })
        },
        OnAnfIncrease:()=>{
            dispatch({
                type:'number/anfIncrease'
            })
        },
        OnAnfDecrease:()=>{
            dispatch({
                type:'number/anfDecrease'
            })
        }
    
    }
)
const Dom = connect(mapStateToProps,maDispatchToProps)(Number)

export default Dom