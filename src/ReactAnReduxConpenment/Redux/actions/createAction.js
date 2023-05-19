import { createActions,  handleActions } from 'redux-actions'
const defaultState = {
  
        cont: 0,
        date: [],
        isOver: false
}
export const { getStudent, isOver } = createActions({
    GET_STUDENT: (date, cont) => ({ date, cont }),
    IS_OVER: date =>date

})
const studentReducer = handleActions(
    {
        GET_STUDENT: (state,{payload} ) => {
            return { ...state,...payload }
        },
        IS_OVER:(state,{payload})=>( {
        ...state,isOver:payload
        }),
    },
    defaultState
);
export default studentReducer