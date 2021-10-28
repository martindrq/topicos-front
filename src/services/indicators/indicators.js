import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const indicatorsService = {
  getIndicators: async function () {
    const response = await axios.get(BACKEND_URL + "/indicators", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  },
  getIndicatorsValues: async () => {
    const response = await axios.get(BACKEND_URL + "/indicators_values", {
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
    const response = await axios.post(BACKEND_URL + "/indicator/new_value", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  },
};
export default indicatorsService;
