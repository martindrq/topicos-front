import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const authService = {
  activate: async (data, params) => {
    const response = await axios.post(BACKEND_URL + `/user/activate${params}`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  },
  login: async (data, token) => {
    const response = await axios.post(BACKEND_URL + "/login", data, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      },
    });
    return response;
  },
};
export default authService;
