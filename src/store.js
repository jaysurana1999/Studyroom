import {createStore, combineReducers} from 'redux';
import rnmReducer from './reducers/rnmReducer';

const rootReducer = combineReducers({
  rnmReducer: rnmReducer,
});

const configureStore = () => createStore(rootReducer);

export default configureStore;
