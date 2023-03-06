const initialState = {
    nama: "",
    nis: "",
    isAuth: false,
  };
  
  export const authProcess = (state = initialState, action) => {
    if (action.type === "login") {
      return {
        ...state,
        nama: action?.nama,
        nis: action?.nis,
        isAuth: action.isAuth,
      };
    }
    return {
      ...state,
    };
  };