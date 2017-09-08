export default function(state = {postingLoginParams: false, auth: {isSignedUp: false}}
,action) {
  switch (action.type) {
  case 'POSTSIGNUPPARAMS':
    return {postingSignUpParams: true, auth: {isSignedUp: false} }
  case 'AUTH':
    return {postingSignUpParams: false, auth: {isSignedUp: true} }
  default:
    return state
  }
}
