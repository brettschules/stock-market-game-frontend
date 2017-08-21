export default function(state={loading: false, arrayOfEquitySymbolsForProfilePage: [] },
action) {
switch (action.type) {
  case 'LOADINGUSERAPI':
    return{
      loading: true, equites: [], arrayOfEquitySymbolsForProfilePage: []
    }
  case 'FETCHUSEREQUITIESFORPROFILEPAGE':
    return {
      loading: false, arrayOfEquitySymbolsForProfilePage: action.arrayOfEquitySymbols
    }
  default:
    return state
  }
}
