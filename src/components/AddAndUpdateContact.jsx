import React from 'react';
import Modal from './Modal';
import {Field, Form, Formik } from 'formik';
import { collection, updateDoc } from 'firebase/firestore';
import { db } from "../config/firebase";
import { addDoc, doc, } from 'firebase/firestore';


const AddAndUpdateContact = ({ isOpen, onClose, isUpdate, contact  }) => {
  const addContact = async (contact) => {
    try {
         const contactRef = collection(db,"contacts");
         await addDoc(contactRef, contact);
         onClose();
         limitToLast.success("Contact added Succesfully");
    }    catch (error) {
       console.log(error);
    }
    };

    const updateContact = async (contact, id) => {
        try {
             const contactRef = doc(db,"contacts", id);
             await updateDoc(contactRef, contact);
             onClose();
             limitToLast.success("Contact added Succesfully");
        }    catch (error) {
           console.log(error);
        }
        };

  return (
    <div>
        <Modal isOpen={isOpen} onClose={onClose}>
       <Formik
          initialValues={
            isUpdate 
            ? 
                {
                    name: contact.name,
                    email: contact.email,
                  }
                :  {
                    name: "",
                    email: "",
                  }
                
          }
          onSubmit={(values) => {
            console.log(values);
            isUpdate ? updateContact(values, contact.id) :
             addContact(values);
          }}
       
       >
        <Form className='flex flex-col gap-4'>
           <div className='flex flex-col gap-1 '>
           <label htmlFor='name'>Name</label>
           <Field  name="name" className="h-10 border"/>
           </div>
           <div className='flex flex-col gap-1 '>
           <label htmlFor='email'>Email</label>
           <Field name="email" className="h-10 border"/>
           </div>

           <button className='bg-orange px-3 py-1.5 border self-end'>
            {isUpdate ? "update" : "Add"} Contact
           </button>
        </Form>
       </Formik>
      </Modal>
      </div>
  );

}
export default AddAndUpdateContact;