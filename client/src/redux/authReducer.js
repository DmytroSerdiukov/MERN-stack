const SET_AUTH = 'SET_AUTH'

let initState = {
  authIn: false,
  firstname: null,
  lastname: null,
  email: null,
  password: null
}

const authReducer = (state = initState, action) => {
  switch(action.type) {
    case SET_AUTH:
      return {
        ...state, ...action.data ,authIn: true
    }
    default: 
      return state
  }
}

export default authReducer

export const setAuth = (data, status) => ({type: SET_AUTH, data ,status: status})