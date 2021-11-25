import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const logsService = {
  getLogs: async (token) => {
    const response = await axios.get(BACKEND_URL + "/logs", {
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      },
    });
    return response;
  },
};

export default logsService;
