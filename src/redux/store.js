import { composeWithDevTools } from '@redux-devtools/extension';
import {createStore} from 'redux'
import productReducer from './reducers/productReducer'

const store = createStore(productReducer, composeWithDevTools());
export default store;