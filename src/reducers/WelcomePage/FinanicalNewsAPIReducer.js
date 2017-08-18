export default function FetchFinanicalAPI(state={fetchingAPI: false, news: []},
  action) {
    switch (action.type) {
    case 'FETCHINGAPI':
      return {
        fetchingAPI: true,
        news: []
      }
    case 'FINANCIALNEWSAPI':
      return {
        fetchingAPI: false,
        news: action.news
      }
    default:
      return state
    }
  }
