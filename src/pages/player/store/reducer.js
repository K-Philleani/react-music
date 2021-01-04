import { Map } from 'immutable'

const defaultState = Map({
  currentSong: {}
})


function reducer(state = defaultState, action) {
  switch(action.type) {
    case 'player/setSong':
      return state.set('currentSong', action.res.songs[0])
    default:
      return state
  }
}

export default reducer