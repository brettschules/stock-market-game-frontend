export const SELECTEDEQUITYFROMSEARCH = 'SELECTEDEQUITYFROMSEARCH';
export const SEARCHBARVALUE = 'SEARCHBARVALUE'

export function SelectedEquityFromSearch(equityName, equitySymbol) {
  return {
    type: SELECTEDEQUITYFROMSEARCH,
    equityName: equityName,
    equitySymbol: equitySymbol
  }
}

export function SearchBarValue(value) {
  return {
    type: SEARCHBARVALUE,
    payload: value
  }
}
