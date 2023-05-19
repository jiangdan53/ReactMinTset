import {connect} from 'react-redux'
import  {result} from '../Redux/actions/resultAction'
import Tab from '../showContainer/tabelist/studTabe'
function mapStateToProps (state){
    return {
        date:state.date
    }
}
function maDispatchToProps(dispatch){
   return{
    OnChenge(obj){
        dispatch(result(obj))
    }
   } 
}
export default connect(mapStateToProps,maDispatchToProps)(Tab)