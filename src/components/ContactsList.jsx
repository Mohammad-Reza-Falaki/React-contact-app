import { useState } from "react";
import styles from "../styles/ContactsList.module.css";

import Contact from "./Contact";

function ContactsList(props) {

    const [contact, setContact] = useState(1);

    const deleteHandler = (e) => {
        for (let item of props.contactsData) {
            if (item.phone === e.target.previousElementSibling.innerText) {
                props.contactsData.splice(props.contactsData.indexOf(item), 1);
                setContact(contact => contact + 1)
            }
        }
    };

    return (
        <div className={styles.contacts}>
            <h2 className={styles.listTitle}>Contacts List</h2>
            <div className={styles.list}>
                {!props.contactsData.length && (
                    <h2>Please enter data!</h2>
                )}
                {props.contactsData.map((item, index) => (
                    <Contact 
                        key={index} 
                        name={item.name} 
                        lastName={item.lastName} 
                        email={item.email} 
                        phone={item.phone}
                        deleteFunc={deleteHandler}
                        props={props.contactsData}
                    />
                ))}
            </div>
        </div>
    );
}

export default ContactsList;