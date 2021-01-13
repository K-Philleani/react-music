import axios from '@/service/request'

// 同步请求
export const changeBannerList = res => {
  return {
     type: 'recommend/changeBannerList',
     res
  }
}

export const changeRecommendList = res => {
  return {
    type: 'recommend/changeHotList',
    hotRecommends: res.result
  }
}

export const setNewAlbumsList = res => {
  return {
    type: 'recommend/changeAlbumsList',
    albumsList: res.albums
  }
}


// 异步请求
export const getBannerList = dispatch => {
  axios({
    url: '/banner'
  }).then(res => {
    dispatch(changeBannerList(res))
  })
}

export const getHotRecommendList = limit => {
  return dispatch => {
    axios({
      url: `/personalized?limit=${limit}`
    }).then(res => {
      dispatch(changeRecommendList(res))
    })
  }
}
export const getNewAlbumsList = limit => {
  return dispatch => {
    axios({
      url: '/album/new',
      params: {
        area: 'ZH',
        limit
      }
    }).then(res => {
      dispatch(setNewAlbumsList(res))
    })
  }
}

