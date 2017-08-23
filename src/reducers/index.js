import {combineReducers} from 'redux'
import UserProfileReducer from './MainPage/UserProfileReducer'
import LoginReducer from './WelcomePage/LoginReducer'
import SelectedEquityFromSearchReducer from './InvestPage/SelectedEquityFromSearchReducer'
import FetchHistoricalDataReducer from './InvestPage/FetchHistoricalDataReducer'
import SearchBarValueReducer from './InvestPage/SearchBarValueReducer'
import FinanicalNewsAPIReducer from './WelcomePage/FinanicalNewsAPIReducer'
import UserEquitiesReducer from './MainPage/UserEquitiesReducer'
import UserEquitiesForProfilePageReducer from './MainPage/UserEquitiesForProfilePageReducer'


const rootReducer = combineReducers({
  equityInfo: UserProfileReducer,
  postLogin: LoginReducer,
  selectedEquity: SelectedEquityFromSearchReducer,
  fetchHistoricalData: FetchHistoricalDataReducer,
  searchBarValue: SearchBarValueReducer,
  fetchFinanicalNewsAPI: FinanicalNewsAPIReducer,
  userEquities: UserEquitiesReducer,
  userEquitiesForProfilePage: UserEquitiesForProfilePageReducer
})

export default rootReducer
