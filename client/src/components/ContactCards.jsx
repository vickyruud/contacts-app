import React from "react";
import ContactCard from "./ContactCard";

function ContactCards({ contacts }) {
  console.log(contacts)
  
  const arrayOfCards = contacts.map(contact => {
    return (
      <ContactCard contact={contact} id={contact.id} />
    )
  })

  return (
    <>
      {arrayOfCards}
    </>
  );
}

export default ContactCards;
