import React from 'react'
import { AiFillEdit } from "react-icons/ai";

function ContactCard({ contact, deleteContact }) {
  
  const handleDelete = () => {
    deleteContact(contact);
  }

  const editContact = () => {
    
  }

  return (
    <figure className="bg-white w-80 h-80 rounded-lg  shadow-md pt-7">
        <img
          alt="user"
          src={contact.image_url}
          className=" object-fit w-32 h-32 rounded-full mx-auto"
        />
        <figcaption className="text-center mt-5">
          <p className="text-gray-700 font-semibold text-xl mb-2">
            {contact.firstName} {contact.lastName}
          </p>
          <p className="text-gray-500">
           <span className="font-medium">Email:</span> {contact.email}
          </p>
          <p
            className="text-gray-500">
          <span className="font-medium">Phone:</span> {contact.phoneNumber}
          </p>
      </figcaption>
      <section className='flex flex-row justify-around mb-2 mt-2'>
         <button           
            className="bg-red-500 hover:bg-orange-600
            text-white
            font-bold py-2 px-4
            rounded w-fit"
          onClick={handleDelete}
        >         
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
        </button>
         <button className="bg-yellow-500 hover:bg-yellow-600
            text-white
            font-bold py-2 px-4
            rounded w-fit">
            <AiFillEdit/>
          </button>
            </section>
      </figure>
  )
}

export default ContactCard