import authRealService from "./auth";
import authServiceMock from "./auth-mock";

export default process.env.REACT_APP_USE_MOCK_DATA ? authServiceMock : authRealService;


