import React, { useEffect, useState } from "react";
import axios from "axios";
import "./app.css";
import ContactCards from "./components/ContactCards";
import Modal from "./components/Modal";

function App() {
  const [contacts, setContacts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  

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

  const showForm = () => {
    setShowModal(true);
  }

  useEffect(() => {  
      getContacts();
    
  }, []);

  return (
    <div className="bg-gray-200">
      <h1 className="text-center text-3xl font-bold text-black">Contacts</h1>
      <Modal showModal={showModal} />
      <section className="flex justify-center pt-5">
        <button
          className="bg-blue-500 w-auto hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={showForm}
        >
          Add new contact
        </button>
      </section>
      <section className="p-20 grid grid-cols-1 gap-5  md:grid-cols-4">
        <ContactCards contacts={contacts} />
      </section>
    </div>
  );
}

export default App;
