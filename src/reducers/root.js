import {combineReducers} from 'redux';
import { reducer as form } from 'redux-form'
import contacts from './contacts';
import isPopup from './popup';

const rootReducer = combineReducers({
    contacts,
    isPopup,
    form
});

export default rootReducer;
