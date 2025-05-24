import css from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const defaultValues = {
  name: "",
  tel: "",
};

const ContactsSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "It's too short")
    .max(30, "It's too long!")
    .required("Required"),
  tel: Yup.string()
    .min(3, "It's too short")
    .max(30, "It's too long!")
    .required("Required"),
});

export default function ContactForm({ contactAdd }) {
  return (
    <Formik
      initialValues={defaultValues}
      onSubmit={(values, actions) => {
        contactAdd(values);
        actions.resetForm();
      }}
      validationSchema={ContactsSchema}
    >
      <Form>
        <Field type="text" name="name" placeholder="name" />
        <ErrorMessage name="name" component="span" />
        <Field type="tel" name="tel" placeholder="phone number" />
        <ErrorMessage name="tel" component="span" />

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
