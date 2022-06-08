import React, { useEffect, useState } from "react";
import axios from "axios";
import "./app.css";
import ContactCards from "./components/ContactCards";
import Modal from "./components/Modal";

function App() {
  const [contacts, setContacts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedContact, setSelectedContact] = useState([]);
  

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
      });
  };

  
  //shows form
  const showForm = () => {
    setShowModal(true);
  }

  const deleteContact = (contact) => {
    axios.delete(`/api/contacts/${contact._id}`)
      .then(res => {
        getContacts();
    })
  }

 

  //loads contacts on initial load
  useEffect(() => {  
      getContacts();    
  }, []);



  return (
    <div className="bg-gray-200">
      <h1 className="text-center text-3xl font-bold text-black">Contacts</h1>
      <Modal  showModal={showModal} setShowModal={setShowModal} getContacts={getContacts} selectedContact={selectedContact} setSelectedContact={setSelectedContact} />       
      <section className="flex justify-center pt-5">
        <button
          className="bg-blue-500 w-auto hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={showForm}
        >
          Add new contact
        </button>
      </section>
      <section className="p-20 grid grid-cols-1 gap-5  md:grid-cols-4">
        <ContactCards  deleteContact={deleteContact} contacts={contacts} setShowModal={setShowModal} selectedContact={selectedContact} setSelectedContact={setSelectedContact} />
      </section>
    </div>
  );
}

export default App;
