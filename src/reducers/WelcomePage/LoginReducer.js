export default function(state = {postingLoginParams: false, auth: {isLoggedIn: false}}
,action) {
  switch (action.type) {
  case 'POSTLOGINPARAMS':
    return {postingLoginParams: true, auth: {isLoggedIn: false} }
  case 'AUTH':
    return {postingLoginParams: false, auth: {isLoggedIn: true} }
  case 'ISLOGGEDIN':
    return {postingLoginParams: false, auth: {isLoggedIn: true} }
  case 'LOGOUT':
    return {postingLoginParams: false, auth: {isLoggedIn: false} }
  default:
    return state
  }
}
