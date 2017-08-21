export default function(state={loading: false, equites: [], totalUnitsPurchasedForEquities: [], arrayOfEquitySymbols: []  },
action) {
  switch (action.type) {
  case 'LOADINGUSERAPI':
    return{
      loading: true, equites: [], totalUnitsPurchasedForEquities: [], arrayOfEquitySymbols: []
    }
  case 'FETCHUSEREQUITIES':
    return {
      loading: false, equites: action.equities, totalUnitsPurchasedForEquities: action.totalUnitsPurchasedForEquities, arrayOfEquitySymbols: action.arrayOfEquitySymbols
    }
  default:
    return state
  }
}
