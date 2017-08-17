export default function( state = {value: ""},
action) {

switch (action.type) {
  case 'SEARCHBARVALUE':
    return {
      value: action.payload
    }
  default:
    return state
  }
}
