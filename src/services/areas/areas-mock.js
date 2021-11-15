import areasMock from "../../mock-data/areas.json";

const areasService = {
  getAreas: async function () {
    return areasMock;
  },
};

export default areasService;
