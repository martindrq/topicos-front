import indicatorsMock from "../../mock-data/indicators.json";
import dataMock from "../../mock-data/samples.json";

const indicatorsService = {
  getIndicators: async function () {
    return {data: indicatorsMock};
  },
  getIndicatorsValues: async () => {
    return dataMock;
  },
  addIndicator: async (data) => {
    return {...data, id: 6};
  },
  addIndicatorValue: async (data) => {
    return true;
  },
  editIndicator: async function (data) {
    return data;
  },
  editIndicatorValue: async function (data) {
    return data;
  },
  deleteIndicator: async function (data) {
    return {};
  },
  deleteIndicatorValue: async function (data) {
    return {};
  },
};
export default indicatorsService;
