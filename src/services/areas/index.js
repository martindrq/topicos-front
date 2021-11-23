import areasRealService from "./areas";
import areasServiceMock from "./areas-mock";

export default process.env.REACT_APP_USE_MOCK_DATA === "true" ? areasServiceMock : areasRealService;


