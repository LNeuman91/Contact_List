import {useState, useEffect} from "react";

const SelectedContact = ({selectedContactId, setSelectedContactId }) => {
    const [contact, setContact] = useState(null)
    useEffect(()=>{
        const fetchContact = async () => {
        try {
            const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
            const json = await response.json();    
            console.log(json);
            setContact(json);
        } catch (error) {
            console.error(error);
          }
    }
    fetchContact()
}, [])
return (
    contact ? (
        <div>
            <p>{contact.name}</p>
            <p>{contact.email}</p>
        </div>
    ) : (
        <p>loading</p>
    )
);
}
export default SelectedContact