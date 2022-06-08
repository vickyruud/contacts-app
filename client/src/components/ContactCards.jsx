import React from "react";
import ContactCard from "./ContactCard";

function ContactCards({ contacts }) {
  
  const arrayOfCards = contacts.map((contact, i) => {
    return (
      <div key={i}>
        <ContactCard contact={contact} />
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
