
const initialState = {
      user: [],
      isLogging: false,
      error:"",

}

export const loginReducer=(state=initialState, action) => {
      switch (action.type) {
            case LOG_USER_START:
              return {
                ...state,
                isLogging: true,
                error: null
              };
            case LOG_USER_SUCCESS:
                  console.log(action.payload)
              return {
                ...state,
                isLogging: false,
                user: action.payload
              };
            case LOG_USER_FAILURE:
              return {
                ...state,
                isLogging: false,
                error: action.payload
              };
              default:
                return state;
            }
} 