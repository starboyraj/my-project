import Navbar from './components/Navbar';
import { FaCirclePlus } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { useEffect, useState } from 'react';
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import { HiOutlineUserCircle } from "react-icons/hi";
import { RiEditCircleLine } from "react-icons/ri";
import { IoMdTrash } from "react-icons/io";
import ContactCard from './components/ContactCard';
import Modal from './components/Modal';
import AddAndUpdateContact from './components/AddAndUpdateContact';
import useDisclouse from './hooks/useDisclouse';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [contacts, setContacts] = useState([]);

  const { isOpen, onClose, onOpen} = useDisclouse();
  
  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        const contactsSnapshot = await getDocs(contactsRef);

         onSnapshot(contactsRef,(snapshot) => {
          const contactLists = snapshot.docs.map((doc) => {
            return {
             id: doc.id,
             ...doc.data(),
            }
           } );
         
           setContacts(contactLists);
           return contactLists;
         })

      } catch (error) {
        console.log(error);
      }
    };
    

    getContacts();
  }, []);

  const filterContacts = (e) => {
    const value = e.target.value;


    
  };


  return (
    <>
    <div className='mx-auto max-w-[370px] px-4'>
      < Navbar />
      <div className='flex gap-2'>
      <div className='relative flex items-center flex-grow'>
      <FiSearch className='absolute ml-1 text-3xl text-white'/>
       <input
        type='text'
        className='h-10 flex-grow rounded-md border
        border-white bg-transparent pl-9 text-white'
       />
       </div>
       <FaCirclePlus 
       onClick={onOpen} 
       className='text-5xl text-white' cursor-pointer />
      </div>
      <div className='mt-4 flex flex-col gap-3'>
        {contacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact}/>
        
        ))}

      </div>
    </div>
    <AddAndUpdateContact onClose={onClose} isOpen={isOpen} />
     <ToastContainer />   
    </>
  );
};

export default App;