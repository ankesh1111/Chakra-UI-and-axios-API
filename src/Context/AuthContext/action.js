// action creators related to auth state;

 
export const loading = {
    type: "loading"
  };

  export const success = (token) => {
    return {
      type: "success",
      payLoad: token
    };

  };


  export const failure = {
    type: "failure"
  };


  export const Get_products_loading = {
    type: "Get_products_loading"
  };
  export const Get_products_success = (data) => {
    return {
      type: "Get_products_success",
      payLoad: data
    };
  };

  
  export const Get_products_failure = {
    type: "Get_products_failure"
  };