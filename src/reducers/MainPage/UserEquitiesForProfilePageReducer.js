export default function(state={loading: false, arrayOfEquitySymbolsForProfilePage: [], onlyEquitiesThatHasAtLeastOneUnit: [] },
action) {
switch (action.type) {
  case 'LOADINGUSERAPI':
    return{
      loading: true, equites: [], arrayOfEquitySymbolsForProfilePage: [], onlyEquitiesThatHasAtLeastOneUnit: []
    }
  case 'FETCHUSEREQUITIESFORPROFILEPAGE':
    return {
      loading: false, arrayOfEquitySymbolsForProfilePage: action.arrayOfEquitySymbols, onlyEquitiesThatHasAtLeastOneUnit: action.onlyEquitiesThatHasAtLeastOneUnit
    }
  default:
    return state
  }
}
