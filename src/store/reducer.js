import { combineReducers } from 'redux'
import recommendReducer from '@/pages/discover/list/recommend/store/reducer'

const rootReducer = combineReducers({
  recommend: recommendReducer
})

export default rootReducer