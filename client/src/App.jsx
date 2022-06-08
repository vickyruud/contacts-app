import React, { useEffect, useState } from "react";
import axios from "axios";
import "./app.css";
import ContactCards from "./components/ContactCards";

function App() {
  const [contacts, setContacts] = useState([]);
  

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

  useEffect(() => {  
      getContacts();
    
  }, [contacts]);

  return (
    <div className="bg-gray-200">
      <h1 className="text-center text-3xl font-bold text-black">Contacts</h1>
      <section className="flex justify-center pt-5">
      <button className="bg-blue-500 w-auto hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add new contact</button>
      </section>
      <section className="p-20 grid grid-cols-1 gap-5  md:grid-cols-3">
        <ContactCards contacts={contacts} />
      </section>
    </div>
  );
}

export default App;
