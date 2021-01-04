import axios from '@/service/request'


export const setSong = res => {
  return {
    type: 'player/setSong',
    res
  }
}


export const getSongDetail = dispatch => {
  axios({
    url: '/song/detail',
    params: {
      ids: '167876'
    }
  }).then(res => {
    dispatch(setSong(res))
  })
}