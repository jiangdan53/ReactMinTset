/* eslint-disable import/no-anonymous-default-export */
import {SETLOGINUSER,GETSTUDENT,ISLODIN} from '../../action/loginUserAction'
const initialState ={
  islodin:false,
  date:[]
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
  case SETLOGINUSER:
    return payload;
    case GETSTUDENT:
      return {
        ...state,
        date:payload
      };
      case ISLODIN:
        return {
          ...state,
          islodin:payload
        }
  default:
    return state;
  }
}
