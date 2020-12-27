import axios from '@/service/request'


export const changeBannerList = res => {
  console.log(res)
  return {
     type: 'recommend/changeBannerList',
     res
  }
}


export const getBannerList = dispatch => {
  axios({
    url: '/banner'
  }).then(res => {
    dispatch(changeBannerList(res))
  })
}