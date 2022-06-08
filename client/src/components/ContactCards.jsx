import React from "react";
import ContactCard from "./ContactCard";

function ContactCards({ contacts, deleteContact, setSelectedContact, selectedContact, setShowModal }) {
  
  const arrayOfCards = contacts.map((contact, i) => {
    return (
      <div key={i}>
        <ContactCard deleteContact={deleteContact} contact={contact} selectedContact={selectedContact} setShowModal={setShowModal} setSelectedContact={setSelectedContact} />
      </div>
    )
  })

  return (
    <>
      {arrayOfCards}
    </>
  );
}

export default ContactCards;
