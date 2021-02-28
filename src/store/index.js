import { createStore } from "vuex";
import Mutations from './mutations';
import Actions from './actions';
import State from './state';

export default createStore({
  name: 'store',
  components: {
    Mutations,
    Actions,
    State
  }
});
