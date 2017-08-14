export default function(state = {postingLoginParams: false, auth: {isLoggedIn: false}}
,action) {
  switch (action.type) {
  case 'POSTLOGINPARAMS':
    return {postingLoginParams: true, auth: {isLoggedIn: false} }
  case 'AUTH':
    return {postingLoginParams: false, auth: {isLoggedIn: true, username: action.resp.username, name: action.resp.name} }
  case 'LOGOUT':
    return {postingLoginParams: false, auth: {isLoggedIn: false} }
  default:
    return state
  }
}
