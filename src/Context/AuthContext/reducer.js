// reducer related to auth state;


export const reducer = (state, action) => {
    switch (action.type) {
      case "loading":
        console.log("Login req");
        return state;
      case "success":
        return { ...state, authStatus: true, token: action.payLoad };
  
      case "failure":
        return state;
  
      case "Get_products_loading":
        return state;
  
      case "Get_products_success":
        return { ...state, data: action.payLoad.data };
  
      case "Get_products_failure":
        return state;
      default:
        return state;
    }
  };