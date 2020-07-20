import { createStore} from 'redux'
import { updateSongsInBooklet } from './reducers'

export const store = createStore(updateSongsInBooklet)