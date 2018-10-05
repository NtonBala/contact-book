import {SHOW_POPUP, HIDE_POPUP} from '../constants/actionTypes';

const isPopup = (state = false, action) => {
    const {type} = action;

    switch(type) {
        case SHOW_POPUP:
            return true;
        case HIDE_POPUP:
            return false;
        default:
            return state;
    }
};

export default isPopup;
