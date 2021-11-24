import usersMock from "../../mock-data/users.json";
import statsMock from "../../mock-data/stats.json";

const usersService = {
  getUsers: async function () {
    return { data: usersMock };
  },
  addUser: async function (data) {
    return {...data, id: 4};
  },
  deleteUser: async function (data) {
    return {};
  },
  getStats:  async function () {
    return { data: statsMock };
  },
};

export default usersService;
