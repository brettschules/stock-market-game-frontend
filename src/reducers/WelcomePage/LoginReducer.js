export default function(state = {postingLoginParams: false, auth: {isLoggedIn: false}}
,action) {
  switch (action.type) {
  case 'POSTLOGINPARAMS':
    return {postingLoginParams: true, auth: {isLoggedIn: false} }
  case 'AUTH':
    return {postingLoginParams: false, auth: {isLoggedIn: true}, userInfo: {user_id: action.resp.user_id, username: action.resp.username, name: action.resp.name, account_balance: action.resp.account_balance, image: action.resp.image} }
  case 'ISLOGGEDIN':
    return {postingLoginParams: false, auth: {isLoggedIn: true}, userInfo: {user_id: action.resp.user_id, username: action.resp.username, name: action.resp.name, account_balance: action.resp.account_balance, image: action.resp.image} }
  case 'LOGOUT':
    return {postingLoginParams: false, auth: {isLoggedIn: false} }
  default:
    return state
  }
}
