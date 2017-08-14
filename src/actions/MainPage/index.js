export const FETCHEQUITYINFO = 'FETCHEQUITYINFO'
export const LOADINGEQUITYINFO = 'LOADINGEQUITYINFO'
export const MOREINFOCLICK = 'MOREINFOCLICK'

const KEY = "MV8HZ4PAMIW9SLYH"
const BASEURL = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol="
const ONEMINUTEINVERVALS = "&interval=1min&apikey="

  const getLatestStockPrice = (obj) => {
    let first;
    for (var i in obj) {
      if (obj.hasOwnProperty(i)) {
        first = obj[i];
        break;
      }
    }
    return first["2. high"]
  }

  const getStockSymbol = (obj) => {
    return obj["Meta Data"]["2. Symbol"]
  }

export function FetchEquitesAlpha(equity) {
  return function(dispatch) {
    dispatch({type: LOADINGEQUITYINFO})
    return fetch(BASEURL + equity + ONEMINUTEINVERVALS + KEY)
      .then(resp => resp.json())
      .then(data => dispatch({type: FETCHEQUITYINFO, price: getLatestStockPrice(data["Time Series (1min)"]), symbol: getStockSymbol(data) }))
  }
}
