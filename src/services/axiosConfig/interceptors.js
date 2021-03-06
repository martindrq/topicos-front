import axios from "axios";

axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    if(error.response?.status === 401){
      const pathname = window.location.pathname;
      if(!pathname.includes("/iniciar-sesion")){
        localStorage.removeItem('userDeresPlatform')
        window.location.href = "/iniciar-sesion";
      }
    }
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });