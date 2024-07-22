import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";import { addContact } from "../../redux/contactsSlice";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";
import * as Yup from "yup";

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(3, "Minimum 3 letters")
    .max(30, "Maximum 30 letters")
    .required("Name is required"),
  number: Yup.string()
    .trim()
    .min(9, "Minimum 9 digits")
    .required("A phone number is required"),
});



export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);

  const handleAddContact = (contact) => {
    dispatch(addContact(contact));
  };

  const handleSubmit = (values, actions) => {
    handleAddContact({
      id: nanoid(),
      name: values.name,
      number: values.number,
    });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={contactSchema}
    >
      <Form className={css.container}>
        <div className={css.fieldGroup}>
          <label>Name</label>
          <Field className={css.input} name="name" type="text" />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>
        <div className={css.fieldGroup}>
          <label>Number</label>
          <Field className={css.input} type="tel" name="number" />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
