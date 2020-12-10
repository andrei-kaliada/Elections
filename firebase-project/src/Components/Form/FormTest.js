import React, { useState, useEffect } from "react";
import { Styles } from "./StylesForm";
import { connect } from 'react-redux';
import { Formik, useField, Form } from "formik";
import * as Yup from "yup";
import classNames from "classnames";
import fire from '../../config/fbConfig';
import {signUp, signIn} from '../../redux/actions/index';
import { Route, Switch, Redirect } from "react-router-dom";
import history from '../../history/history';

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
  const [user, setUser] = useState("");

  // useEffect(() => {
    
  //   return () => {
  //     authListener();
  //   }
  // }, [])


  // const handleLogin = () => {
  //   fire
  //   .auth()
  //   .signInWithEmailAndPassword(email,password)
  //   .catch(err => {
  //     switch(err.code){
  //       case"auth/invalid-email":
  //       case"auth/user-disabled":
  //       case "auth/user-not-found":
  //         setEmailError(err.message);
  //         break;
  //       case "auth/wrong-password":
  //         setPasswordError(err.message);
  //         break;
  //     }
  //   })
  // }
  
  // const handleSignUp = () => {
  //   fire
  //   .auth()
  //   .createUserWithEmailAndPassword(email,password)
  //   .catch(err => {
  //     switch(err.code){
  //       case"auth/email-already-in-use":
  //       case"auth/invalid-email":
  //         setEmailError(err.message);
  //         break;
  //       case "auth/weak-password":
  //         setPasswordError(err.message);
  //         break;
  //     }
  //   })
  // }
  
  // const handleLogOut = () => {
  //   fire.auth().signOut();
  // }
  
  // const authListener = () => {
  //   fire.auth().onAuthStateChanged(user => {
  //     if(user){
  //       setUser(user)
  //     }else{
  //       setUser("");
  //     }
  //   })
  // }

  return (
    <>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const FormSingUp = ({signUp}) => {
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
        lastname:"",
        city:"",
        phone:"",
        passport:"",
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .min(3, "Must be at least 3 characters")
          .max(10, "Must be 10 characters or less")
          .required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string()
          .min(8, "Must be at least 8 characters")
          .max(20, "Must be 20 characters or less")
          .required("Required"),
          lastname: Yup.string()
          .min(3, "Must be at least 3 characters")
          .max(10, "Must be 10 characters or less")
          .required("Required"),
          city: Yup.string()
          .min(3, "Must be at least 3 characters")
          .max(10, "Must be 10 characters or less")
          .required("Required"),
          passport: Yup.string()
          .min(3, "Must be at least 3 characters")
          .max(10, "Must be 10 characters or less")
          .required("Required"),
          phone:Yup.string().matches(phoneRegExp, 'Phone number is not valid').required("Required").max(8, "Must be 8 characters or less"),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(()=>{
          // alert("Success. You are created account.");
        // console.log(JSON.stringify(values, null, 2));
        signUp(values);
        resetForm();
        setSubmitting(false);
        },3000)
        // alert("Success. You are created account.");
        // console.log(JSON.stringify(values, null, 2));
        // signUp(values);
        // resetForm();
        // setSubmitting(false);
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
              label="LastName"
              name="lastname"
              type="text"
              placeholder="Last name"
            />
            <CustomTextInput
              label="City"
              name="city"
              type="text"
              placeholder="City"
            />
            <CustomTextInput
              label="Passport"
              name="passport"
              type="text"
              placeholder="Passport"
            />
             <CustomTextInput
              label="Phone"
              name="phone"
              type="tel"
              placeholder="Phone"
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
            {props.isSubmitting ?  <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div> : <button type="submit">
              Sign In
            </button>}
          </Form>
        </div>
      )}
    </Formik>
  );
};

const FormSingIn = ({signIn}) => {
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
          // alert(JSON.stringify(values, null, 2));
          signIn(values);
          // alert('Success. You are Sign In!');
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
           
            {props.isSubmitting ?  <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div> : <button type="submit">
              Sign In
            </button>}
            
          </Form>
        </div>
      )}
    </Formik>
  );
};

const FormComponent = ({signUp, signIn}) => {
  const [activeRegister, setActiveRegister] = useState(false);

  return (
    <Styles>
      <div className="form-wrapp">
        <div
          className={classNames("container highTest", {
            "right-panel-active": activeRegister,
          })}
          id="container"
        >
          <FormSingUp signUp={signUp}/>
          <FormSingIn signIn={signIn} />
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

const mapStateToProps = (state) => {
  return{

  }
}

// const mapDispatchToProps = (dispatch) =>{
//   return {
//     signUp:actions.signUp,
//     signIn:actions.signIn,
//   }
// } 


export default connect(mapStateToProps,{signUp,signIn})(FormComponent);
