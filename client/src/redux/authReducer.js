const SET_AUTH = 'SET_AUTH'

let initState = {
    authIn: false
}

const authReducer = (state = initState, action) => {
  switch(action.type) {
    case SET_AUTH:
      return {
        ...state, authIn: true
    }
    default: 
      return state
  }
}

export default authReducer

export const setAuth = (status) => ({type: SET_AUTH, status: status})