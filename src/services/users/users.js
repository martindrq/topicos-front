import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const usersService = {
  getUsers: async function () {
    const response = await axios.get(BACKEND_URL + "/user", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  },
  addUser: async function (data) {
    const response = await axios.post(BACKEND_URL + "/user/register", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  },
  deleteUser: async function (data) {
    const response = await axios.delete(BACKEND_URL + `/user/delete?id=${data.id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  },
};

export default usersService;
