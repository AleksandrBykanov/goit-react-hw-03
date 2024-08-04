import { Formik, Form, Field } from "formik";
import css from "../ContactForm/ContactForm.module.css";

const ContactForm = ({addProfile}) => {
  const handleSubmit = (values, actions) => {
    const profile = {
      name: values.name,
      number: values.number
    }
    addProfile(profile);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label className={css.label} htmlFor="name">
          Name:
          <Field className={css.field} type="text" name="name" />
        </label>
        <label className={css.label} htmlFor="number">
          Number:
          <Field className={css.field} type="tel" name="number" />
        </label>
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
