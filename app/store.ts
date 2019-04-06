import {configureStore} from 'redux-starter-kit';
import HomeScreenReducer from './controllers/homeScreen/reducers';

const store = configureStore({
    HomeScreenReducer: HomeScreenReducer;
})

export default store;