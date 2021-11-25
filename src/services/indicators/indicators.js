import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const indicatorsService = {
  getIndicators: async function (token) {
    const response = await axios.get(BACKEND_URL + "/indicator", {
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      },
    });
    return response;
  },
  getIndicatorsValues: async (token, companyId=null, indicatorId=null, from=null, to=null) => {
    const response = await axios.get(BACKEND_URL + "/indicator_value", {
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      },
      params: {
        company: companyId,
        indicator: indicatorId,
        from: from,
        to: to
      }
    });
    return response;
  },
  addIndicator: async (data, token) => {
    const response = await axios.post(BACKEND_URL + "/indicator/create", data, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      },
    });
    return response;
  },
  addIndicatorValue: async (data, token) => {
    const response = await axios.post(BACKEND_URL + "/indicator_value/create", data, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      },
    });
    return response;
  },
  editIndicator: async function (data, token) {
    const response = await axios.put(BACKEND_URL + "/indicator/modify", data, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      },
    });
    return response;
  },
  editIndicatorValue: async function (data, token) {
    const response = await axios.put(BACKEND_URL + "/indicator_value/modify", data, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      },
    });
    return response;
  },
  deleteIndicator: async function (data, token) {
    const response = await axios.delete(BACKEND_URL + `/indicator/delete?id=${data.id}`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      },
    });
    return response;
  },
  deleteIndicatorValue: async function (data, token) {
    const response = await axios.delete(BACKEND_URL + `/indicator_value/delete?id=${data.id}`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      },
    });
    return response;
  },

  getNotifyIndicators: async (token, companyId=null, indicatorId=null, from=null, to=null) => {
    const response = await axios.get(BACKEND_URL + "/indicator_value", {
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      },
      params: {
        company: companyId,
        indicator: indicatorId,
        from: from,
        to: to
      }
    });
    return response;
  },

};
export default indicatorsService;
