export default function(state = {equity: "", equitySymbol: ""}, action) {
  switch (action.type) {
    case 'SELECTEDEQUITYFROMSEARCH':
      return {
        equity: action.equityName,
        equitySymbol: action.equitySymbol
      }
    default:
      return state
  }
}
