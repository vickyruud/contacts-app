import React, { useState } from 'react'
import UploadImage from './UploadImage';

function NewContact({contact}) {

  const [editContact, setEditContact] = useState(contact ? contact : null);
  const [firstName, setFirstName] = useState(contact.firstName ? contact.firstName : null);
  const [lastName, setLastName] = useState(contact.lastName ? contact.lastName : null);
  const [email, setEmail] = useState(contact.email ? contact.email : null);
  const [phoneNumber, setPhoneNumber] = useState(contact.phoneNumber ? contact.phoneNumber : null);
  const [imageUrl, setImageUrl] = useState(contact.image_url ? contact.image_url : null);



  return (
    <div className="flex items-center justify-center bg-gray-200 dark:bg-teal-700 ">
      <div className="px-8 py-6  text-left bg-gray-200 shadow-2xl dark:bg-teal-700">
     
        <h3 className="text-xl font-semi text-center">Create a new contact</h3>
        <form>
          <div className="mt-4">
            <div>
              <label className="block" htmlFor="firstName">
                First Name
              </label>
              <input
                type="text"
                placeholder="First Name"
                value={contact ? contact.firstName : " "}
                onChange={e => setFirstName(e.target.value)}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-gray-900 dark:text-gray-900"
              />              
            </div>
            <div className="mt-4">
              <label className="block">Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                value={contact ? contact.lastName : " "}
                onChange={e => setLastName(e.target.value)}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-gray-900 dark:text-gray-900"
              />
            </div>
             <div className="mt-4">
              <label className="block">Email</label>
              <input
                type="email"
                placeholder="Email"
                value={contact ? contact.email : " "}
                onChange={e => setEmail(e.target.value)}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-gray-900 dark:text-gray-900"
              />
            </div>
             <div className="mt-4">
              <label className="block">Phone Number</label>
              <input
                type="tel"
                placeholder="Phone Number"
                 value={contact ? contact.phoneNumber : " "}
                onChange={e => setPhoneNumber(e.target.value)}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-gray-900 dark:text-gray-900"
              />
            </div>            
            <UploadImage setImageUrl={setImageUrl} imageUrl={imageUrl} />
            <div className="flex items-baseline justify-between">
              <button className="bg-blue-500 w-auto hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Create
              </button>
              <button className="bg-blue-500 w-auto hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default NewContact