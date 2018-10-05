import React from 'react';
import {connect} from 'react-redux';
import './App.css';
import Popup from './components/Popup';
import ContactForm from './components/ContactForm';
import {SHOW_POPUP, HIDE_POPUP} from "./constants/actionTypes";

const App = ({isPopup, showPopup, hidePopup}) => (
    <div className='app'>
        <button onClick={showPopup}>Add Contact</button>

        {isPopup ?
            <Popup closePopup={hidePopup}>
                <ContactForm/>
            </Popup>
            : null
        }
    </div>
);

const mapStateToProps = state => ({
    isPopup: state.isPopup
});

const mapDispatchToProps = dispatch => ({
    showPopup: () => dispatch({type: SHOW_POPUP}),
    hidePopup: () => dispatch({type: HIDE_POPUP})
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
