import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from "../../redux/contactsSlice";
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css";

export default function Contact({ data }) {
  const dispatch = useDispatch();
  const { id, name, number } = data;

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.container}>
      <div className={css.info}>
        <FaUser />
        <p>{name}</p>
      </div>
      <div className={css.info}>
        <FaPhoneAlt />
        <p>{number}</p>
      </div>
      <button className={css.btn} type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}

