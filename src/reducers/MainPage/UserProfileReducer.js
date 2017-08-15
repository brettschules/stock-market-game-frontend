export default function fetchEquityAlpha(state = {loading: false, equityInfo:[{symbol: "", price: "", time: ""}] }
  , action) {
  switch (action.type) {
  case 'LOADINGEQUITYINFO':
    return {loading: true, equityInfo: []}
  case 'FETCHEQUITYINFO':
    let price = action.price
    let symbol = action.symbol
    let time = action.time
    let equityArray = [...state.equityInfo, {price: price, symbol: symbol, time: time}]
    return {loading: false, equityInfo: equityArray}
    break;
  default:
    return state
  }
};
