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
  }, []);

  return (
    <div className="bg-black">
      <section>
        <form>
          <input
            type="text"
            className="ml-20 mt-6 rounded-md p-1"
            placeholder="Search for a contact..."
          />
        </form>
      </section>
      <section className="p-20 grid grid-cols-1 gap-x-5 sm:grid-cols-2 md:grid-cols-3">
        <ContactCards contacts={contacts} />
      </section>
    </div>
  );
}

export default App;
