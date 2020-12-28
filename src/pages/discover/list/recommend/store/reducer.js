import { Map } from 'immutable'


const defaultState = Map({
  bannerList: [],
  hotRecommendList: []
})


const recommendReducer = (state = defaultState, action) => {
   switch(action.type) {
      case 'recommend/changeBannerList':
        return state.set("bannerList", action.res.banners)
      case 'recommend/changeHotList':
        return state.set("hotRecommendList", action.hotRecommends)
      default:
        return state
    }

}



export default recommendReducer