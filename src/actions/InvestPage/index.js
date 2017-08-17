export const SELECTEDEQUITYFROMSEARCH = 'SELECTEDEQUITYFROMSEARCH';
export const SEARCHBARVALUE = 'SEARCHBARVALUE'

export function SelectedEquityFromSearch(equity) {
  return {
    type: SELECTEDEQUITYFROMSEARCH,
    payload: equity
  }
}

export function SearchBarValue(value) {
  return {
    type: SEARCHBARVALUE,
    payload: value
  }
}
