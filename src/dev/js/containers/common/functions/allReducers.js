import {combineReducers} from 'redux';
//import {sessionReducer} from 'redux-react-session';
import getMemeReducers from '../../../containers/createFile/reducers/getMemeReducers';


/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
	getMeme : getMemeReducers
});

export default allReducers
