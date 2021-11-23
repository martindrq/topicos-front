import usersRealService from "./users";
import usersServiceMock from "./users-mock";

export default process.env.REACT_APP_USE_MOCK_DATA === "true" ? usersServiceMock : usersRealService;


