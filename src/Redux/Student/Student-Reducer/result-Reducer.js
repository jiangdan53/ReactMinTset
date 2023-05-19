
/* eslint-disable import/no-anonymous-default-export */
import { ResultActionType} from '../Student-Action/result-Action'
let initialState = {
    key:'',
    sex:0,
    page:1,
    linmt:10
}
export default (state = initialState, { type, payload }) => {
   switch (type) {
       case ResultActionType.condition:
            return {
                ...state,
                ...payload
            }
       default:
           return state
   }

}