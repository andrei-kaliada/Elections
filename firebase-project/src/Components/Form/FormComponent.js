// import React from 'react';
// import {Styles} from '../../Styles';
// import {Formik, useField, Form} from 'formik';
// import * as Yup from 'yup';

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

// export default function FormComponent() {
//     return (
//         <Styles>
//         <Formik
//         initialValues={{
//             name:'',
//             email:'',
//         }}
//         validationSchema={Yup.object({
//             name:Yup.string()
//                 .min(3,'Must be at least 3 characters')
//                 .max(15,'Must be 15 characters or less')
//                 .required("Required"),
//             email:Yup.string()
//                 .email('Invalid email address')
//                 .required('Required')
//         })}
//         onSubmit={(values, {setSubmitting, resetForm}) => {
//             console.log('Success!!!');
//             setTimeout(()=>{
//                 alert(JSON.stringify(values,null,2));
//                 resetForm();
//                 setSubmitting(false);
//             }, 3000)
//         }}
//         >
//             {(props) => (
//                  <Form>
//                  <h1>Sign Up</h1>
//                  <CustomTextInput label="Name" name="name" type="text" placeholder="Input your name"/>
//                  <CustomTextInput label="Email" name="email" type="text" placeholder="Input your email"/>
//                 <button type="submit">{props.isSubmitting ? "Loading..." :  'Submit'}</button>
//              </Form>
//             )}
//         </Formik>
       
//     </Styles>
//     )
// }
