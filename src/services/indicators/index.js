import indicatorsRealService from "./indicators";
import indicatorsServiceMock from "./indicators-mock";

export default process.env.REACT_APP_USE_MOCK_DATA ? indicatorsServiceMock : indicatorsRealService;


