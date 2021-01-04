import { combineReducers } from 'redux-immutable'
import recommendReducer from '@/pages/discover/list/recommend/store/reducer'
import playerReducer from '@/pages/player/store/reducer'

const rootReducer = combineReducers({
  recommend: recommendReducer,
  player: playerReducer
})

export default rootReducer