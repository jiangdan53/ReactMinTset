import search from "../../Stu/page/conRigth/search/search";
import { connect } from "react-redux";
import  {result} from '../Redux/actions/resultAction'
function mapStateToProps(state){
    return  {
        UrlSea:{
            emlValueIn:state.result.search,
            RnValue:state.result.sex
        }
    }
  }
  function maDispatchToProps(dispatch){
    return {
        GetSdate(obj){
        obj = {
            page:1,
            size:10,
            sex:obj.RnValue,
            search:obj.emlValueIn
        }
        dispatch(result(obj))
      }
    }
  }
  export default connect(mapStateToProps,maDispatchToProps)(search)