import { combineReducers } from 'redux-immutable'
import recommendReducer from '@/pages/discover/list/recommend/store/reducer'

const rootReducer = combineReducers({
  recommend: recommendReducer
})

export default rootReducer