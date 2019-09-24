const initialState = {
      user: [],
      isRegistering: false,
      error:"",

}

export const registerReducer=(state=initialState, action) => {
      switch (action.type) {
            case GET_USER_START:
              return {
                ...state,
                isRegistering: true,
                error: null
              };
            case GET_USER_SUCCESS:
                  console.log(action.payload)
              return {
                ...state,
                isRegistering: false,
                user: action.payload
              };
            case GET_USER_FAILURE:
              return {
                ...state,
                isRegistering: false,
                error: action.payload
              };
              default:
                return state;
            }
} 