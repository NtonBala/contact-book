import React from 'react';
import ImagePlaceholder from './ImagePlaceholder';

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
            <div style={{width: "100px", height: "100px"}}>
                <ImagePlaceholder/>
            </div>
        </div>
        <div>
            <button type="submit">Add/Save Contact</button>
        </div>
    </form>
);

export default ContactForm;
