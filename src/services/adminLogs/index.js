import logsRealService from './logs'

export default /*process.env.REACT_APP_USE_MOCK_DATA === "true" ? indicatorsServiceMock :*/ logsRealService;