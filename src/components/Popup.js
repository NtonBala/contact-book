import React from 'react';
import PropTypes from 'prop-types';
import OutsideClick from '../containers/OutsideClick';

const Popup = ({closePopup, children}) => (
    <div className='popup'>
        <OutsideClick closePopup={closePopup}>
            <div className='popup_inner'>
                <div>
                    {children}
                </div>
            </div>
        </OutsideClick>
    </div>
);

Popup.propTypes = {
    closePopup: PropTypes.func.isRequired
};

export default Popup;
