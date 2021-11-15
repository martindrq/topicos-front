import areasMock from "../../mock-data/areas.json";

const areasService = {
  getAreas: async function () {
    return areasMock;
  },
  addArea: async function (data) {
    return {...data, id: 4};
  },
  editArea: async function (data) {
    return data;
  },
  deleteArea: async function (data) {
    return {};
  },
};

export default areasService;
