const SET_APARTS = 'SET_APARTS'

let initState = {
    aparts: []
}

const apartsReducer = (state = initState, action) => {
  switch(action.type) {
    case SET_APARTS:
        console.log(action.data)
      return {
        ...state, aparts: [...action.data]
    }
    default: 
      return state
  }
}

export default apartsReducer

export const setAparts = (data) => ({type: SET_APARTS, data})