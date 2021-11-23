import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const areasService = {
  getAreas: async function (token) {
    const response = await axios.get(BACKEND_URL + "/area", {
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      },
    });
    return response;
  },
  addArea: async function (data, token) {
    const response = await axios.post(BACKEND_URL + "/area/create", data, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      },
    });
    return response;
  },
  editArea: async function (data, token) {
    const response = await axios.put(BACKEND_URL + "/area/modify", data, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      },
    });
    return response;
  },
  deleteArea: async function (data, token) {
    const response = await axios.delete(BACKEND_URL + `/area/delete?id=${data.id}`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      },
    });
    return response;
  },
};

export default areasService;
