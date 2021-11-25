import axios from "axios";

const BACKEND_URL = 'https://2f22-167-58-12-150.ngrok.io';

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
