import React, {Component} from 'react';
import './App.css';
import Popup from './components/Popup';
import ContactForm from './components/ContactForm';

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
                        <ContactForm/>
                    </Popup>
                    : null
                }
            </div>
        );
    }
}

export default App;
