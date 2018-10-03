import React, {Component} from 'react';
import './App.css';
import Popup from './components/Popup';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPopup: false
        };
    }
    togglePopup = () => {
        this.setState({
            showPopup: !this.state.showPopup
        });
    };
    render() {
        return (
            <div className='app'>
                <button onClick={this.togglePopup}>Add Contact</button>

                {this.state.showPopup ?
                    <Popup closePopup={this.togglePopup}>
                        <div/>
                    </Popup>
                    : null
                }
            </div>
        );
    }
}

export default App;
