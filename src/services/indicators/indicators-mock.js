import indicatorsMock from "../../mock-data/indicators.json";
import dataMock from "../../mock-data/data.json";

const indicatorsService = {
  getIndicators: async function () {
    return indicatorsMock;
  },
  getIndicatorsValues: async () => {
    return dataMock;
  },
  addIndicator: async (data) => {
    return true;
  },
  addIndicatorValue: async (data) => {
    return true;
  },
};
export default indicatorsService;
