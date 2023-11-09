import { useState } from "react";
import styles from "../styles/Form.module.css";
import ContactsList from "./ContactsList";

function Form() {

    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);

    const nameHandler = (e) => {
        setName(e.target.value);
    };

    const lastNameHandler = (e) => {
        setLastName(e.target.value);
    };

    const emailHandler = (e) => {
        setEmail(e.target.value);
    };

    const phoneHandler = (e) => {
        setPhone(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        if (!name || !lastName || !email || !phone) {
            setError(true);
        } else {
            setData([...data, {name: name, lastName: lastName, email: email, phone: phone}]);
            setName(""), setLastName(""), setEmail(""), setPhone("");
            setError(false);
        }
    };
    
    return (
        <main className={styles.main}>
            <form className={styles.form} onSubmit={submitHandler}>
                <input className={styles.nameAndEmail} type="text" placeholder="Name" value={name} onChange={nameHandler}/>
                <input className={styles.nameAndEmail} type="text" placeholder="Last Name" value={lastName} onChange={lastNameHandler}/>
                <input type="email" placeholder="Email" value={email} onChange={emailHandler}/>
                <input type="text" placeholder="Phone" value={phone} onChange={phoneHandler}/>
                <button type="submit">Add Contact</button>
            </form>
            <p className={error ? styles.error : styles.errorDisable}>Please enter valid data!</p>
            <ContactsList contactsData={data}/>
        </main>
    );
}

export default Form;