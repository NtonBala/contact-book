import {combineReducers} from 'redux';
import { reducer as form } from 'redux-form'
import contacts from './contacts';

const rootReducer = combineReducers({
    contacts,
    form
});

export default rootReducer;
