import React from 'react';
import styled from 'styled-components';
import Image from '../images/placeholder-contact.png';

const ContactForm = () => (
    <form>
        <div>
            <div>
                <label>
                    First Name <input/>
                </label>
                <label>
                    Last Name <input/>
                </label>
                <label>
                    Phone Number <input/>
                </label>
                <label>
                    Email Address <input/>
                </label>
                <label>
                    Date of birth <input/>
                </label>
            </div>
            <div>
                <img src={Image}/>
            </div>
        </div>
        <div>
            <button type="submit">Add/Save Contact</button>
        </div>
    </form>
);

//STYLES


export default ContactForm;
