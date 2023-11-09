import styles from "../styles/Contact.module.css"

// eslint-disable-next-line react/prop-types
function Contact({name, lastName, email, phone, deleteFunc}) {

  return (
    <div className={styles.contact}>
      <p>{name} {lastName}</p>
      <p>{email}</p>
      <p>{phone}</p>
      <p onClick={deleteFunc} className={styles.delete}>Delete</p>
    </div>
  )
}

export default Contact;