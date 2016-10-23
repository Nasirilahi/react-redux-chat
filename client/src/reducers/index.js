import messages from './messages';
import friends from './friends';
import activeFriends from './activeFriends';
import user from './user';
import userValidation from './userValidation';
 
import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form'


const rootReducer = combineReducers({
messages,
friends,
activeFriends,
user,
userValidation
});

export default rootReducer;