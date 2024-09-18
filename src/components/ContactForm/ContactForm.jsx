import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";


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
      <Form>
        <label htmlFor="name">Name</label>
        <Field type="text" name="name" id="name" />
        <ErrorMessage name="name" component="span" />
        
        <label htmlFor="number">Number</label>
        <Field type="text" name="number" id="number" />
        <ErrorMessage name="number" component="span" />

        <button type="submit">Add</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
