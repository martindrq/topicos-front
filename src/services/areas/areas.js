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
    const response = await axios.get(BACKEND_URL + "/area/create", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  },
};

export default areasService;
