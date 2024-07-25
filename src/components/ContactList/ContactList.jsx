import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contactsSlice";

export default function ContactList() {
 const filteredContacts = useSelector(selectFilteredContacts)

  return (
    <ul className={css.container}>
      {filteredContacts.map((filteredContact) => (
        <li key={filteredContact.id} className={css.item}>
          <Contact contact={filteredContact} />
        </li>
      ))}
    </ul>
  );
}
