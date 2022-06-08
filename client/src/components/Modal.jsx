import React from "react";
import NewContact from "./NewContact";

export default function Modal({
  showModal,
  setShowModal,
  login,
  modalType,
  register,
  getContacts,
  selectedContact,
  setSelectedContact,
  
}) {
  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <NewContact
              getContacts={getContacts}
              setShowModal={setShowModal}
              contact={selectedContact}
              setSelectedContact={setSelectedContact}
            />
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
