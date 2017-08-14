import {combineReducers} from 'redux'
import UserProfileReducer from './MainPage/UserProfileReducer'
import LoginReducer from './WelcomePage/LoginReducer'

const rootReducer = combineReducers({
  equityInfo: UserProfileReducer,
  postLogin: LoginReducer
})

export default rootReducer
