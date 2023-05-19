
export const ADDUSER = Symbol('add-user')
export const DELETEUUSER = Symbol('delet-user')
export const UPDATEUSER = Symbol('update-user')
export const getAddUserAction = (user) => ({
  type: ADDUSER,
  payload:user
})
export const getDeletUserAction = (id) => ({
    type: DELETEUUSER,
    payload:id
  })
export const getUpdateUserAction = (id,newDate) => ({
    type: UPDATEUSER,
    payload:{
        ...newDate,
        id
    }
  })

