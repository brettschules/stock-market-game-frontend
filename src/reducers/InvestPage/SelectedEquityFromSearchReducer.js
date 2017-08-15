export default function(state = {equity: ""}, action) {
  switch (action.type) {
    case 'SELECTEDEQUITYFROMSEARCH':
      return {
        equity: action.payload
      }
    default:
      return state
  }
}
