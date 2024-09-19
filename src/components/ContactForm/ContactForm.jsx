import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from 'yup';
import s from './ContactForm.module.css';


const ContactForm = ({ onAdd }) => {
  const feedbackSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too short!").max(50, "Too long!").required("Required"),
    number: Yup.string().min(3, "Too short!").max(50, "Too long!").required("Required"),
  });

  const handleSubmit = (values, actions) => {
    const newContact = { ...values, id: nanoid() };
    onAdd(newContact);
    actions.resetForm();
  };

  return (
    <Formik initialValues={{ name: "", number: "" }} onSubmit={handleSubmit} validationSchema={feedbackSchema}>
      <Form className={s.form}>
        <label htmlFor="name" className={s.label}>Name</label>
        <Field type="text" name="name" id="name" className={s.input}/>
        <ErrorMessage name="name" component="span" className={s.error} />
        
        <label htmlFor="number" className={s.label}>Number</label>
        <Field type="text" name="number" id="number" className={s.input}/>
        <ErrorMessage name="number" component="span" className={s.error}/>

        <button type="submit" className={s.btn}>Add</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
