export const POSTLOGINPARAMS = 'POSTLOGINPARAMS'
export const AUTH = 'AUTH'
export const LOGOUT = 'LOGOUT'
export const ISLOGGEDIN = 'ISLOGGEDIN'
export const CURRENT_USER = 'CURRENT_USER'

const BASEURL = 'http://localhost:3000/api/v1'


function headers () {
  return {
    'content-type': 'application/json',
    'accept': 'application/json',
    'Authorization': localStorage.getItem('jwt')
  }
}

export function Login(loginParams) {
  return function(dispatch) {
    dispatch({type: POSTLOGINPARAMS})
    return fetch(`${BASEURL}/login`,{
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

export function CurrentUser() {
  return function(dispatch) {
    dispatch({type: POSTLOGINPARAMS})
    fetch(`${BASEURL}/me`)
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
