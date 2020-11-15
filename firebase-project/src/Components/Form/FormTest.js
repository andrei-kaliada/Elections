import React, { useState } from "react";
import { Styles } from "./StylesForm";
import { Formik, useField, Form } from "formik";
import * as Yup from "yup";
import classNames from "classnames";

// const CustomTextInput = ({label, ...props})=> {

//     const [field, meta] = useField(props);

//     return(
//         <>
//             <label htmlFor={props.id ||props.name}>{label}</label>
//             <input className="text-input" {...field} {...props}/>
//             {meta.touched && meta.error ? (
//          <div className="error">{meta.error}</div>
//        ) : null}
//         </>
//     );
// }

const CustomTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const FormSingUp = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .min(3, "Must be at least 3 characters")
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string()
          .min(3, "Must be at least 3 characters")
          .max(15, "Must be 15 characters or less")
          .required("Required"),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        console.log("Success!!!");
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          resetForm();
          setSubmitting(false);
        }, 3000);
      }}
    >
      {(props) => (
        <div className="form-container sign-up-container">
          <Form>
            <h1>Create Account</h1>
            <CustomTextInput
              label="Name"
              name="name"
              type="text"
              placeholder="Name"
            />
            <CustomTextInput
              label="Email"
              name="email"
              type="email"
              placeholder="Email"
            />
            <CustomTextInput
              label="Password"
              name="password"
              type="password"
              placeholder="Password"
            />
            <button type="submit">
              {props.isSubmitting ? "Loading..." : "Sign Up"}
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

const FormSingIn = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={Yup.object({
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string()
          .min(3, "Must be at least 3 characters")
          .max(15, "Must be 15 characters or less")
          .required("Required"),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        console.log("Success!!!");
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          resetForm();
          setSubmitting(false);
        }, 3000);
      }}
    >
      {(props) => (
        <div className="form-container sign-in-container">
          <Form>
            <h1>Sign in</h1>
            <CustomTextInput
              label="Email"
              name="email"
              type="email"
              placeholder="Email"
            />
            <CustomTextInput
              label="Password"
              name="password"
              type="password"
              placeholder="Password"
            />
            <a href="#">Forgot your password?</a>
            <button type="submit">
              {props.isSubmitting ? "Loading..." : "Sign In"}
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default function FormComponent() {
  const [activeRegister, setActiveRegister] = useState(false);

  return (
    <Styles>
      <div className="form-wrapp">
        <div
          className={classNames("container", {
            "right-panel-active": activeRegister,
          })}
          id="container"
        >
          <FormSingUp />
          <FormSingIn />
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>
                  To keep connected with us please login with your personal info
                </p>
                <button
                  onClick={() => setActiveRegister(false)}
                  className="ghost"
                  id="signIn"
                >
                  Sign In
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Hello, Friend!</h1>
                <p>Enter your personal details and start journey with us</p>
                <button
                  onClick={() => setActiveRegister(true)}
                  className="ghost"
                  id="signUp"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Styles>
  );
}
