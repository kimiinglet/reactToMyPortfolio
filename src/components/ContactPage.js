import React from 'react';
import ReactContactForm from 'react-mail-form';

function ContactPage() {
    return <div style={{ 
        margin: 'auto', 
        textAlign: 'center',        
        }} >
        <ReactContactForm to="kinglet91391@gmail.com" />
    </div>
}

export default ContactPage