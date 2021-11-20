import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const companiesService = {
  getCompanies: async function () {
    const response = await axios.get(BACKEND_URL + "/company", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  },
  addCompany: async function (data) {
    const response = await axios.post(BACKEND_URL + "/company/create", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  },
  editCompany: async function (data) {
    const response = await axios.put(BACKEND_URL + "/company/modify", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  },
  deleteCompany: async function (data) {
    const response = await axios.delete(BACKEND_URL + `/company/delete?id=${data.id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  },
};

export default companiesService;
