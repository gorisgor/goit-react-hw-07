import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from "../../redux/contactsOps";
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css";

export default function Contact({ contact }) {
  const dispatch = useDispatch();
  const { id, name, number } = contact;

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.container}>
      <div className={css.info}>
        <FaUser className={css.icon} />
        <p>{name}</p>
      </div>
      <div className={css.info}>
        <FaPhoneAlt className={css.icon} />
        <p>{number}</p>
      </div>
      <button className={css.btn} type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}

