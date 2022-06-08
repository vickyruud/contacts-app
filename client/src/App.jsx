import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [contacts, setContacts] = useState([]);

  const getContacts = () => {
    axios.get('/api/contacts', {
      headers: {
        "Content-type" : "application/json"
      }
    })
      .then(res => {
        setContacts(res.data);
      })
  }

  useEffect(() => {
    getContacts();
  }, [])
  


  return (
    <div>
      App      
    </div>
  )
}

export default App