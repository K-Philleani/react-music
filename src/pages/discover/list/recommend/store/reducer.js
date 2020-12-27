import { Map } from 'immutable'


const defaultState = Map({
  bannerList: []
})


const recommendReducer = (state = defaultState, action) => {
   switch(action.type) {
      case 'recommend/changeBannerList':
        return state.set("bannerList", action.res.banners)
      default:
        return state
    }

}



export default recommendReducer