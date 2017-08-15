import {combineReducers} from 'redux'
import UserProfileReducer from './MainPage/UserProfileReducer'
import LoginReducer from './WelcomePage/LoginReducer'
import SelectedEquityFromSearchReducer from './InvestPage/SelectedEquityFromSearchReducer'


const rootReducer = combineReducers({
  equityInfo: UserProfileReducer,
  postLogin: LoginReducer,
  selectedEquity: SelectedEquityFromSearchReducer
})

export default rootReducer
