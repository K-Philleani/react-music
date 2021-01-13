import { Map } from 'immutable'


const defaultState = Map({
  bannerList: [],
  hotRecommendList: [],
  newAlbums: []
})


const recommendReducer = (state = defaultState, action) => {
   switch(action.type) {
      case 'recommend/changeBannerList':
        return state.set("bannerList", action.res.banners)
      case 'recommend/changeHotList':
        return state.set("hotRecommendList", action.hotRecommends)
      case 'recommend/changeAlbumsList':
        return state.set('newAlbums', action.albumsList)
      default:
        return state
    }

}



export default recommendReducer