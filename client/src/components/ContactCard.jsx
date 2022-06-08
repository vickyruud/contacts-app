import React from 'react'

function ContactCard({contact}) {
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
      </figure>
  )
}

export default ContactCard