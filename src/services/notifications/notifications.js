import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const notificationsService = {
  getNotifyIndicators: async (token) => {
    const response = await axios.get(BACKEND_URL + "/notifications", {
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      },
    });
    return response;
  },
};
export default notificationsService;
