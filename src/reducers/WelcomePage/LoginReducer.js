export default function(state = {postingLoginParams: false, auth: {isLoggedIn: false},
  currentUser: {
    id: "",
    name: "",
    username: "",
    account_balance: "",
    image: ""
    }
  }
,action) {
  switch (action.type) {
  case 'POSTLOGINPARAMS':
    return {postingLoginParams: true, auth: {isLoggedIn: false} }
  case 'AUTH':
    return {postingLoginParams: false, auth: {isLoggedIn: true}}
  case 'ISLOGGEDIN':
    return {postingLoginParams: false, auth: {isLoggedIn: true}}
  case 'LOGOUT':
    return {postingLoginParams: false, auth: {isLoggedIn: false} }
  case 'CURRENT_USER':
    return {postingLoginParams: false, auth: {isLoggedIn: true},
    currentUser: {
      id: action.resp.id,
      name: action.resp.name,
      username: action.resp.username,
      account_balance: action.resp.account_balance,
      image: action.resp.image
      }
  }
  default:
    return state
  }
}
