import axios from "axios";

const BACKEND_URL = 'https://2f22-167-58-12-150.ngrok.io';

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
