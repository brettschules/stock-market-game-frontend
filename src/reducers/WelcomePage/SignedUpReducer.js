export default function(state = {isSignedUp: false}, action) {
  switch (action.type) {
  case 'SIGNEDUP':
      return{ isSignedUp: true }
  default:
    return state
  }
}
