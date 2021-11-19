import usersMock from "../../mock-data/users.json";

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
};

export default usersService;
