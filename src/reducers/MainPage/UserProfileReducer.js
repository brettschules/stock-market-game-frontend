export default function fetchEquityAlpha(state = {loading: false, equityInfo:[{symbol: "", price: ""}] }
  , action) {
  switch (action.type) {
  case 'LOADINGEQUITYINFO':
    return {loading: true, equityInfo: []}
  case 'FETCHEQUITYINFO':
    let price = action.price
    let symbol = action.symbol
    let equityArray = [...state.equityInfo, {price: price, symbol: symbol}]
    return {loading: false, equityInfo: equityArray}
    break;
  default:
    return state
  }
};
