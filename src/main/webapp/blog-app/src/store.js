const LOGIN = 'LOGIN';
export const login = () => ({ type: LOGIN });
const LOGOUT = 'LOGOUT';
export const logout = () => ({ type: LOGOUT });

const initstate = {
  isLogin: false,
};

const reducer = (state = initstate, action) => {
  switch (action.type) {
    case LOGIN:
	  return { isLogin: true };
	case LOGOUT:
      return { isLogin: false };
    default:
      return state;
  }
};

export default reducer;