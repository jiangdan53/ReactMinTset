import { GetStudentAll } from "../../unit/SumTool"

export const SETLOGINUSER = Symbol('set-login-user')
export const GETSTUDENT  = Symbol('get-student')
export  const ISLODIN = Symbol('set-islodin')
export const loginUserAction = (payload) => ({
  type: SETLOGINUSER,
  payload
})
export const getSTudent=(date)=>({
  type:GETSTUDENT,
  payload:date
})
export const setIsLodin =  (lodin) =>({
  type:ISLODIN,
  payload:lodin
})
export const  setUserDate= ()=>{
  return async function(dispatch,getState,encke){
    dispatch(setIsLodin(true))
    let date  = await GetStudentAll()
    const action = getSTudent(date)
    dispatch(action)
    dispatch(setIsLodin(false))
  }
}