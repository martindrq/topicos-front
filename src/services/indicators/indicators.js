import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const indicatorsService = {
  getIndicators: async function () {
    const response = await axios.get(BACKEND_URL + "/indicator", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  },
  getIndicatorsValues: async () => {
    const response = await axios.get(BACKEND_URL + "/indicator_value", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  },
  addIndicator: async (data) => {
    const response = await axios.post(BACKEND_URL + "/indicator/create", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  },
  addIndicatorValue: async (data) => {
    const response = await axios.post(BACKEND_URL + "/indicator_value/create", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  },
  editIndicator: async function (data) {
    const response = await axios.put(BACKEND_URL + "/indicator/modify", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  },
  editIndicatorValue: async function (data) {
    const response = await axios.put(BACKEND_URL + "/indicator_value/modify", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  },
  deleteIndicator: async function (data) {
    const response = await axios.delete(BACKEND_URL + `/indicator/delete?id=${data.id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  },
  deleteIndicatorValue: async function (data) {
    const response = await axios.delete(BACKEND_URL + `/indicator_value/delete?id=${data.id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  },
};
export default indicatorsService;
