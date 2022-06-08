import React, { useState } from "react";
import UploadImage from "./UploadImage";
import axios from "axios";

function NewContact({
  contact,
  getContacts,
  setShowModal,
  setSelectedContact,
  
}) {
  // const [editContact, setEditContact] = useState(contact ? contact : null);
  const [firstName, setFirstName] = useState(
    contact ? contact.firstName : null
  );
  const [lastName, setLastName] = useState(contact ? contact.lastName : null);
  const [email, setEmail] = useState(contact ? contact.email : null);
  const [phoneNumber, setPhoneNumber] = useState(
    contact ? contact.phoneNumber : null
  );
  const [imageUrl, setImageUrl] = useState(contact ? contact.image_url : null);


  const editThisContact = (contact) => {
    console.log(contact);
    axios.post(`/api/update/${contact._id}`, contact)
      .then(res => {
        console.log(res.data);
        getContacts();
        setSelectedContact('');
    })
  }

  const saveContact = (event) => {
    event.preventDefault();
    let contactObj = {};
    if (contact) {
      contactObj = {
        firstName,
        lastName,
        phoneNumber,
        email,
        image_url: imageUrl,
        _id: contact._id,
      };
      editThisContact(contactObj);
      setShowModal(false);
      setSelectedContact("");
    } else {
      contactObj = {
        firstName,
        lastName,
        phoneNumber,
        email,
        image_url: imageUrl,
      };
      axios.post("/api/contacts", contactObj).then((res) => {
        getContacts();
        setShowModal(false);
        setSelectedContact("");
      });
    }
  };

  const handleCancel = (event) => {
    event.preventDefault();
    setShowModal(false);
    setSelectedContact("");
  };

  return (
    <div className="flex items-center justify-center bg-gray-200 dark:bg-teal-700 ">
      <div className="px-8 py-6  text-left bg-gray-200 shadow-2xl dark:bg-teal-700">
        <h3 className="text-xl font-semi text-center">Create a new contact</h3>
        <form onSubmit={saveContact}>
          <div className="mt-4">
            <div>
              <label className="block" htmlFor="firstName">
                First Name
              </label>
              <input
                defaultValue={contact ? contact.firstName : ""}
                type="text"
                placeholder="First Name"
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-gray-900 dark:text-gray-900"
              />
            </div>
            <div className="mt-4">
              <label className="block">Last Name</label>
              <input
                type="text"
                defaultValue={contact ? contact.lastName : ""}
                placeholder="Last Name"
                onChange={(e) => setLastName(e.target.value)}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-gray-900 dark:text-gray-900"
              />
            </div>
            <div className="mt-4">
              <label className="block">Email</label>
              <input
                type="email"
                placeholder="Email"
                defaultValue={contact ? contact.email : ""}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-gray-900 dark:text-gray-900"
              />
            </div>
            <div className="mt-4">
              <label className="block">Phone Number</label>
              <input
                type="tel"
                placeholder="Phone Number"
                defaultValue={contact ? contact.phoneNumber : ""}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-gray-900 dark:text-gray-900"
              />
            </div>
            <UploadImage setImageUrl={setImageUrl} imageUrl={imageUrl} />
            <div className="flex items-baseline justify-between">
              <button className="bg-blue-500 w-auto hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Submit
              </button>
              <button
                onClick={handleCancel}
                className="bg-blue-500 w-auto hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewContact;
