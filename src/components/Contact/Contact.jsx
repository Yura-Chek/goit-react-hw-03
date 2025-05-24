import css from "./Contact.module.css";
import { IoIosContact } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

export default function Contact({ contacts, contactDelete }) {
  return (
    <li>
      <span>
        <IoIosContact />
        {contacts.name}
      </span>
      <span>
        <FaPhoneAlt />
        {contacts.number}
      </span>
      <button onClick={() => contactDelete(contacts.id)}>Delete</button>
    </li>
  );
}
