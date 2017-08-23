export default function fetchMarqueEquityInfo(state = {loading: false, marqueequityInfo:[{symbol: "", price: ""}] }
  , action) {
  switch (action.type) {
  case 'LOADINGEQUITYINFO':
    return {loading: true, marqueequityInfo: []}
  case 'FETCHMARQUEQUITYINFO':
    let price = action.price
    let symbol = action.symbol
    let equityArray = [...state.marqueequityInfo, {price: price, symbol: symbol}]
    return {loading: false, marqueequityInfo: equityArray}
    break;
  default:
    return state
  }
};
