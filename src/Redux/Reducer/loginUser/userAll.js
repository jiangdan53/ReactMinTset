/* eslint-disable import/no-anonymous-default-export */
import * as userAllAction from '../../action/userAllAction'
import uuid from 'react-uuid';
const initialState = [
{id:uuid(),name:'dd',age:18},
{id:uuid(),name:'dd1',age:18},
{id:uuid(),name:'dd2',age:18},
{id:uuid(),name:'dd3',age:18},
]
export default (state = initialState, { type, payload }) => {
  switch (type) {
  case userAllAction.ADDUSER:
    return payload.age ? [...state,payload] : state;
    case userAllAction.DELETEUUSER:
        return state.filter(it=>it.id !== payload);
      case userAllAction.UPDATEUSER :
          return state.map(it=>it.id=== payload.id ? {...it,...payload} : it)

  default:
    return state
  }
}
