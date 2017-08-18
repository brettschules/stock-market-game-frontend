export default function(state={loading: false, equites: []},
action) {
  switch (action.type) {
  case 'LOADINGUSERAPI':
    return{
      loading: true, equites: []
    }
  case 'FETCHUSEREQUITIES':
    return {
      loading: false, equites: action.equities
    }
  default:
    return state
  }
}
