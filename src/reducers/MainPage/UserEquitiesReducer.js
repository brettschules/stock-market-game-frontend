export default function(state={loading: false, equites: [{}]},
action) {
  switch (action.type) {
  case 'LOADINGUSERAPI':
    return{
      loading: true, equites: [{}], totalUnitsPurchasedForEquities: [{}]
    }
  case 'FETCHUSEREQUITIES':
    return {
      loading: false, equites: action.equities, totalUnitsPurchasedForEquities: action.totalUnitsPurchasedForEquities
    }
  default:
    return state
  }
}
