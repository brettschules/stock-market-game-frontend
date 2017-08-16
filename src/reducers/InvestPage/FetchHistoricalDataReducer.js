export default function(state = {loading: true,
  historicalData: {}},
action) {
  switch (action.type) {
  case 'LOADINGHISTORICALDATA':
    return {
      loading: true,
      historicalData: {}
    }
  case 'FETCHHISTORICALDATA':
    return {
      loading: false,
      historicalData: action.getStockPricesAndMonths
    }
  default:
    return state
  }
}
