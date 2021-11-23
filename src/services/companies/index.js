import companiesRealService from "./companies";
import companiesServiceMock from "./companies-mock";

export default process.env.REACT_APP_USE_MOCK_DATA === "true" ? companiesServiceMock : companiesRealService;


