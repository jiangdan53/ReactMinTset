import Topage from '../../PaGing/PaGingNumber/pangingNumber'
import '../../PaGing/css/paging.css'
import { result } from '../Redux/actions/resultAction'
import { connect } from 'react-redux'
function mapStateToProps(state){
    return  {
        Arrr:{
        datalength:state.date.cont ,
        pageindex:state.result.page,
        pagequantity: 10, 
        maxpage: 5,
        }
    }
  }
  function maDispatchToProps(dispatch){
    return {
        OnCheng(index){
        dispatch(result({page:index}))
      }
    }
  }
  export default  connect(mapStateToProps,maDispatchToProps)(Topage)