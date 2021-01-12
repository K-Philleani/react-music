import axios from '@/service/request'


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