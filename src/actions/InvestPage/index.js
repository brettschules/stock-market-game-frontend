export const SELECTEDEQUITYFROMSEARCH = 'SELECTEDEQUITYFROMSEARCH';
export const FETCHHISTORICALDATA = 'FETCHHISTORICALDATA'
export const LOADINGHISTORICALDATA = 'LOADINGHISTORICALDATA'

const BASEURL = 'https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol='
const KEY = "MV8HZ4PAMIW9SLYH"

// https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=KO&apikey=MV8HZ4PAMIW9SLYH


export function SelectedEquityFromSearch(equity) {
  return {
    type: SELECTEDEQUITYFROMSEARCH,
    payload: equity
  }
}

export function FetchHistoricalData(equity) {
  return function(dispatch) {
    dispatch({type: LOADINGHISTORICALDATA})
    return fetch(BASEURL + equity + '&apikey=' + KEY)
    .then(resp => resp.json())
    .then(data => dispatch({type: FETCHHISTORICALDATA, getStockPricesAndMonths: data["Monthly Time Series"]}))
  }
}
