import React from 'react'
import "./index.css"

const ContactList = ({ contacts }) => {

    return (
        <div class="contacts">
           
          <h2>Contacts</h2>
            {contacts.map((contact) => (
                <div class="card">
                    <div class="card-content">
                        <h5 class="card-header">{contact.name}</h5>
                        <h6 class="card-para">{contact.number}</h6>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default ContactList;