export default function(state = {postingLoginParams: false, isLoggedIn: false}
,action) {
  switch (action.type) {
  case 'POSTLOGINPARAMS':
    return {postingLoginParams: true, isLoggedIn: false }
  case 'AUTH':
    return {postingLoginParams: false, isLoggedIn: true }
  case 'ISLOGGEDIN':
    return {postingLoginParams: false, isLoggedIn: true }
  case 'LOGOUT':
    return {postingLoginParams: false, isLoggedIn: false}
  default:
    return state
  }
}
