import {combineReducers} from 'redux'
import UserProfileReducer from './MainPage/UserProfileReducer'
import LoginReducer from './WelcomePage/LoginReducer'
import SelectedEquityFromSearchReducer from './InvestPage/SelectedEquityFromSearchReducer'
import FetchHistoricalDataReducer from './InvestPage/FetchHistoricalDataReducer'
import SearchBarValueReducer from './InvestPage/SearchBarValueReducer'


const rootReducer = combineReducers({
  equityInfo: UserProfileReducer,
  postLogin: LoginReducer,
  selectedEquity: SelectedEquityFromSearchReducer,
  fetchHistoricalData: FetchHistoricalDataReducer,
  searchBarValue: SearchBarValueReducer
})

export default rootReducer
