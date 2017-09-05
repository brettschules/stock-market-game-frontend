export const POSTLOGINPARAMS = 'POSTLOGINPARAMS'
export const AUTH = 'AUTH'
export const LOGOUT = 'LOGOUT'
export const ISLOGGEDIN = 'ISLOGGEDIN'
export const CURRENT_USER = 'CURRENT_USER'
export const FINANCIALNEWS = 'FINANCIALNEWS'
export const FETCHINGAPI = 'FETCHINGAPI'
export const SIGNEDUP = 'SIGNEDUP'

const BASEURL = process.env.REACT_APP_API

function headers() {
  return {
    'content-type': 'application/json',
    'accept': 'application/json',
    'Authorization': localStorage.getItem('jwt')
  }
}

export function Login(loginParams) {
  return function(dispatch) {
    dispatch({type: POSTLOGINPARAMS})
    return fetch(BASEURL + "login",{
      method: 'POST',
      headers: headers(),
      body: JSON.stringify(loginParams)
    }).then(res => res.json())
    .then(resp => {
      if(!resp.error){
        localStorage.setItem('jwt', resp.jwt)
        dispatch({type: AUTH, resp: resp})
      }
    })
  }
}

export function SignedUp() {
  return {
    type: SIGNEDUP
  }
}

export function CurrentUser() {

  return function(dispatch) {
    dispatch({type: POSTLOGINPARAMS})
    fetch(BASEURL + 'me', {
      headers: headers()
    })
    .then(resp => resp.json())
    .then( (resp) => {
      if (!resp.error) {
        dispatch({type: CURRENT_USER, resp: resp})
      }
    })
  }
}

export function Logout() {
  return {
    type: LOGOUT
  }
}
