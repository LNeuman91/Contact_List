// src/ContactList.jsx
import {useState, useEffect} from "react";
import ContactRow from "./ContactRow";

const dummyContacts = [
    { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
    { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
    { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" }
  ];

const ContactList = ({setSelectedContactId}) => {
    const [contacts, setContacts] = useState(dummyContacts)
    console.log("Contacts: ", contacts)

    useEffect(()=>{
        const fetchContacts = async () => {
            try {
                const response = await fetch("https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users");
                const json = await response.json();    
                console.log(json);
                setContacts(json);
            } catch (error) {
                console.error(error);
              }
        }
        fetchContacts()
    },[])

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th colSpan="3">Contact List</th>
        </tr>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map(contact => (
        <ContactRow key={contact.id} contact={contact} setSelectedContactId={setSelectedContactId}/>
        ))}
      </tbody>
    </table>
  );
};

export default ContactList;
