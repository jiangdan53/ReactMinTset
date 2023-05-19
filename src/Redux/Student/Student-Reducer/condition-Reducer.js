/* eslint-disable import/no-anonymous-default-export */
import  {ConditionActionType} from '../Student-Action/condition-Action'
let initialState  = {
    date:[],
    cont:0,
    islondin:false,
    index:0
}
export default (state = initialState,{type,payload}) => {
    switch (type) {
        case ConditionActionType.getStudentDate:
        return {
            ...state,
            ...payload
        };
        case ConditionActionType.setLoading:
            return {
                ...state,
                islondin:payload
            };
            case ConditionActionType.studentSaga:
                return {
                    ...state
                }
          
        default:
        return state
    }
}