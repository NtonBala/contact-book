import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import OutsideClick from '../containers/OutsideClick';
import s from '../constants/styles';

class Popup extends Component {
    constructor() {
        super();

        this.state = {
            animationType: "enter"
        };
    }
    close = () => {
        this.setState({animationType: "leave"});
    };
    animationEnd = () => {
        if (this.state.animationType === "leave") {
            this.props.closePopup();
        }
    };
    render() {
        return (
            <OuterPopup>
                <OutsideClick closePopup={this.close}>
                    <InnerPopup animationType={this.state.animationType} onAnimationEnd={this.animationEnd}>
                        {this.props.children}
                    </InnerPopup>
                </OutsideClick>
            </OuterPopup>
        );
    }
}

Popup.propTypes = {
    closePopup: PropTypes.func.isRequired
};

//STYLES
const OuterPopup = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    margin: auto;
    z-index: 100;
`;
const InnerPopup = styled.div`
    position: absolute;
    max-width: 600px;
    top: 15%;
    right: 20%;
    bottom: 25%;
    left: 20%;
    margin: auto;
    padding: 15px;
    background-color: ${s.colors.background};
    border: 1px solid ${s.colors.main};
    box-shadow: 2px 5px 5px ${s.colors.shadow};
    z-index: 101;
    @keyframes enter {
        from {transform: scale(0.3, 0.3); opacity: 0;}
    }
    @keyframes leave {
        to {transform: scale(0.3, 0.3); opacity: 0;}
    }
    ${({animationType}) => animationType && `animation: ${animationType} 300ms;`}
`;

export default Popup;
