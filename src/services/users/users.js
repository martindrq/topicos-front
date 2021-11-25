import axios from "axios";

const BACKEND_URL = 'https://2f22-167-58-12-150.ngrok.io';

const usersService = {
  getUsers: async function (token) {
    const response = await axios.get(BACKEND_URL + "/user", {
      headers: {
        "Content-Type": "application/json",
        "Authorization": token,
      },
    });
    return response;
  },
  addUser: async function (data, token) {
    const response = await axios.post(BACKEND_URL + "/user/register", data, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": token,
      },
    });
    return response;
  },
  deleteUser: async function (data, token) {
    const response = await axios.delete(BACKEND_URL + `/user/delete?id=${data.id}`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": token,
      },
    });
    return response;
  },
  getStats: async function (token) {
    const response = await axios.get(BACKEND_URL + `/stats`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": token,
      },
    });
    return response;
  },
};

export default usersService;
