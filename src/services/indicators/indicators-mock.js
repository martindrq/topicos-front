import indicatorsMock from "../../mock-data/indicators.json";
import dataMock from "../../mock-data/samples.json";
import notifyMock from "../../mock-data/notify.json";

const indicatorsService = {
  getIndicators: async function () {
    return {data: indicatorsMock};
  },
  getIndicatorsValues: async () => {
    return {data: dataMock};
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
  getNotifyIndicators: async () => {
    return {data: notifyMock};
  },
};
export default indicatorsService;