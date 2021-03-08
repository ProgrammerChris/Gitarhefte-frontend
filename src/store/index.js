import { createStore } from "vuex";
import Mutations from './mutations';
import Actions from './actions';
import State from './state';
import Getter from './getter'

export default createStore({
  name: 'store',
  components: {
    Mutations,
    Actions,
    State,
    Getter
  }
});
