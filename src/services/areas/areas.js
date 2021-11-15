import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const areasService = {
  getAreas: async function () {
    const response = await axios.get(BACKEND_URL + "/areas", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  },
  addArea: async function (data) {
    const response = await axios.get(BACKEND_URL + "/area/create", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  },
  editArea: async function (data) {
    const response = await axios.get(BACKEND_URL + "/area/modify", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  },
  deleteArea: async function (data) {
    const response = await axios.get(BACKEND_URL + `/area/delete?id=${data.id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  },
};

export default areasService;
