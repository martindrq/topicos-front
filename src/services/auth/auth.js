import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const authService = {
  activate: async (data, token) => {
    const response = await axios.post(BACKEND_URL + '/user/activate', data, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      },
    });
    return response;
  },
  login: async (data, token) => {
    const headers = token ? {
      "Content-Type": "application/json",
      "Authorization": token
    } : {
      "Content-Type": "application/json",
    }
    const response = await axios.post(BACKEND_URL + "/user/login", data, {
      headers,
    });
    return response;
  },
};
export default authService;
