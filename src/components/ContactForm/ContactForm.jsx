import { Formik, Form, Field } from "formik";
import css from "../ContactForm/ContactForm.module.css";

const ContactForm = () => {
  const initialValues = {
      name: "",
      number: ""
  };


  return (
    <Formik initialValues={initialValues} onSubmit={()=>{}}>
      <Form className={css.form}>
        <label className={css.label} htmlFor="name">Name
          <Field className={css.field} type="text" name="name" />
        </label>
        <label htmlFor="number">Number
          <Field className={css.field} type="tel" name="number" />
        </label>
        <button className={css.btn} type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
