import React, {Component} from 'react';
import PropTypes from 'prop-types';

class OutsideClick extends Component {
    componentWillMount() {
        document.addEventListener('click', this.handleClick, false);
    }
    componentWillUnmount() {
        document.removeEventListener('click', this.handleClick, false);
    }
    handleClick = (e) => {
        if (this.node.contains(e.target)) {
            return;
        }

        this.props.closePopup();
    };
    render() {
        return (
            <div ref={node => this.node = node}>
                {this.props.children}
            </div>
        );
    }
}

OutsideClick.propTypes = {
    closePopup: PropTypes.func
};

export default OutsideClick;
