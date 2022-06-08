import React, { useEffect, useState } from "react";
import axios from "axios";
import "./app.css";
import ContactCards from "./components/ContactCards";
import Modal from "./components/Modal";

function App() {
  const [contacts, setContacts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedContact, setSelectedContact] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {

    if (!search) {
      getContacts()
    } else {
      setContacts(contacts.filter(contact => {        
        if (contact.firstName.toLowerCase().includes((search.toLowerCase())) || contact.lastName.toLowerCase().includes((search.toLowerCase()))) {
          return true;
        } else {
          return false;
        }
      }))
      
    }
  }, [search, contacts])

  //fetches all contacts
  const getContacts = () => {
    axios
      .get("/api/contacts", {
        headers: {
          "Content-type": "application/json",
        },
      })
      .then((res) => {
        setContacts(res.data);
        setSelectedContact("");
      });
  };

  //shows form
  const showForm = () => {
    setShowModal(true);
  };

  const deleteContact = (contact) => {
    axios.delete(`/api/contacts/${contact._id}`).then((res) => {
      getContacts();
      setSelectedContact("");
    });
  };

  //loads contacts on initial load
  useEffect(() => {
    getContacts();
    setSelectedContact("");
  }, []);

  return (
    <div className="bg-gray-200 p-5 flex flex-col">
      <h1 className="text-center text-3xl font-bold text-black">Contacts</h1>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        getContacts={getContacts}
        selectedContact={selectedContact}
        setSelectedContact={setSelectedContact}
      />
      <section className="mt-3  flex flex-row justify-center">
        <button
          className="bg-blue-500 w-fit hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={showForm}
        >
          Add new contact
        </button>
      </section>
      <section className="mt-3  flex flex-row justify-center">
        <input
          className="
          form-control
          block
          w-64
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          h-auto
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
          "
          onChange={(e) => setSearch(e.target.value)}
          id="textArea"
          rows="3"
          placeholder="Search for a contact"
          autoFocus
        ></input>
      </section>
      <section className="p-5 md:p-20 grid grid-cols-1 gap-5  md:grid-cols-4">
        <ContactCards
          deleteContact={deleteContact}
          contacts={contacts}
          setShowModal={setShowModal}
          selectedContact={selectedContact}
          setSelectedContact={setSelectedContact}
        />
      </section>
    </div>
  );
}

export default App;
