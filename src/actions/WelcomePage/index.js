export const POSTLOGINPARAMS = 'POSTLOGINPARAMS'
export const AUTH = 'AUTH'
export const LOGOUT = 'LOGOUT'


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
      if(resp.error){
        console.log("do nothing")
      } else {
        localStorage.setItem('jwt', resp.token)
        dispatch({type: AUTH, resp: resp})
      }
    })
  }
}

export function Logout() {
  return {
    type: LOGOUT
  }
}
