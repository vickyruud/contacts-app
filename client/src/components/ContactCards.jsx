import React from "react";
import ContactCard from "./ContactCard";

function ContactCards({ contacts, deleteContact }) {
  
  const arrayOfCards = contacts.map((contact, i) => {
    return (
      <div key={i}>
        <ContactCard deleteContact={deleteContact} contact={contact} />
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
