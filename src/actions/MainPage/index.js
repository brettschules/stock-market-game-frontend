export const FETCHEQUITYINFO = 'FETCHEQUITYINFO'
export const LOADINGEQUITYINFO = 'LOADINGEQUITYINFO'
export const MOREINFOCLICK = 'MOREINFOCLICK'
export const LOADINGUSERAPI = 'LOADINGUSERAPI'
export const FETCHUSEREQUITIES = 'FETCHUSEREQUITIES'


const KEY = "MV8HZ4PAMIW9SLYH"
const BASEURL = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol="
const ONEMINUTEINVERVALS = "&interval=1min&apikey="
const USERAPIURL = "http://localhost:3000/api/v1/users/"

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

  const getLatestTimeRefreshed = (obj) => {
    return obj["Meta Data"]["3. Last Refreshed"]
  }

export function FetchEquitesAlpha(equity) {
  return function(dispatch) {
    dispatch({type: LOADINGEQUITYINFO})
    return fetch(BASEURL + equity + ONEMINUTEINVERVALS + KEY)
      .then(resp => resp.json())
      .then(data => dispatch({type: FETCHEQUITYINFO, time: getLatestTimeRefreshed(data), price: getLatestStockPrice(data["Time Series (1min)"]), symbol: getStockSymbol(data) }))
  }
}

export function FetchUserEquities(userId){
  return function(dispatch){
    dispatch({type: LOADINGUSERAPI})
    return fetch(USERAPIURL + userId)
      .then(resp => resp.json())
      .then(data => dispatch({type: FETCHUSEREQUITIES, equities: data["stocks"]}))
  }
}
