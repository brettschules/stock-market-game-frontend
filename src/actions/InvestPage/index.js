export const SELECTEDEQUITYFROMSEARCH = 'SELECTEDEQUITYFROMSEARCH';

export function SelectedEquityFromSearch(equity) {
  return {
    type: SELECTEDEQUITYFROMSEARCH,
    payload: equity
  }
}
