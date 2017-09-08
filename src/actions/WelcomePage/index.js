export const POSTLOGINPARAMS = 'POSTLOGINPARAMS'
export const AUTH = 'AUTH'
export const LOGOUT = 'LOGOUT'
export const ISLOGGEDIN = 'ISLOGGEDIN'
export const CURRENT_USER = 'CURRENT_USER'
export const FINANCIALNEWS = 'FINANCIALNEWS'
export const FETCHINGAPI = 'FETCHINGAPI'
export const SIGNEDUP = 'SIGNEDUP'
export const POSTSIGNUPPARAMS = 'POSTSIGNUPPARAMS'

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

export function SignUp(SignUpParams) {
  return function(dispatch) {
    dispatch({type: POSTSIGNUPPARAMS})
    return fetch(BASEURL + "users",{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(SignUpParams)
    }).then(res => res.json())
    .then(data => {
      if(!data.error){
        localStorage.setItem('jwt', data.token)
        dispatch({type: AUTH, resp: data})
      }
    })
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
