export const FETCHMARQUEQUITYINFO = 'FETCHMARQUEQUITYINFO'
export const LOADINGEQUITYINFO = 'LOADINGEQUITYINFO'


const ONEMINUTEINVERVALS = "&interval=1min&apikey="
const EQUITYINFOURL = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol="
const KEY = "MV8HZ4PAMIW9SLYH"

const getLatestStockPrice = (obj) => {
  let first;
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      first = obj[i];
      break;
    } else {
      return ""
    }
  }
  return first["2. high"]
}

const getStockSymbol = (obj) => {
  return obj["Meta Data"]["2. Symbol"]
}

export function MarqueeEquityInfo(equity) {
  return function(dispatch) {
    dispatch({type: LOADINGEQUITYINFO})
    return fetch(EQUITYINFOURL + equity + ONEMINUTEINVERVALS + KEY)
      .then(resp => resp.json())
      .then(data => dispatch({type: FETCHMARQUEQUITYINFO, price: getLatestStockPrice(data["Time Series (1min)"]), symbol: getStockSymbol(data) }))
  }
}
