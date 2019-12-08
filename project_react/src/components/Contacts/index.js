import React from 'react'
import "./index.css"

const ContactList = ({ contacts }) => {

    return (
        <div class="contacts">
           
          <h2>Contacts</h2>
            {contacts.map((contact) => (
                <div class="card">
                    <div class="card-content">
                        <p class="card-header">{contact.name}</p>
                        <p class="card-para">{contact.number}</p>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default ContactList;