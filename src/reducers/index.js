import {combineReducers} from 'redux'
import UserProfileReducer from './MainPage/UserProfileReducer'
import LoginReducer from './WelcomePage/LoginReducer'
import SelectedEquityFromSearchReducer from './InvestPage/SelectedEquityFromSearchReducer'
import FetchHistoricalDataReducer from './InvestPage/FetchHistoricalDataReducer'
import SearchBarValueReducer from './InvestPage/SearchBarValueReducer'
import UserEquitiesReducer from './MainPage/UserEquitiesReducer'
import UserEquitiesForProfilePageReducer from './MainPage/UserEquitiesForProfilePageReducer'
import SignedUpReducer from './WelcomePage/SignedUpReducer'


const rootReducer = combineReducers({
  equityInfo: UserProfileReducer,
  postLogin: LoginReducer,
  selectedEquity: SelectedEquityFromSearchReducer,
  fetchHistoricalData: FetchHistoricalDataReducer,
  searchBarValue: SearchBarValueReducer,
  userEquities: UserEquitiesReducer,
  userEquitiesForProfilePage: UserEquitiesForProfilePageReducer,
  signedUp: SignedUpReducer
})

export default rootReducer
