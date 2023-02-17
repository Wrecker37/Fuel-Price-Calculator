import React from "react";
import { Formik, Form, Field } from 'formik';
import './root.css';
import { Link } from "react-router-dom";
import './login.css';
import * as Yup from 'yup';

const valid = Yup.object().shape({
    user: Yup.string()
        .required('Required'),
    password: Yup.string()
        .required('Required'),
  });

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    }

    render() {
        return (
            <>
                <Formik initialValues={{user:'', password: ''}} validationSchema={valid} onSubmit={(values, {setSubmitting}) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}>

                    {({errors, touched, isValidating, isSubmitting}) => (
                        <div>
                            <h1>Account Login</h1>
                            <Form>
                                <div>
                                    <label for="user">Username</label>
                                    <Field type="text" name="user" class="textbox" placeholder="username"/>
                                    <div class="error">{errors.user && touched.user ? ( <div>{errors.user}</div> ) : null}</div>
                                </div>
                                <div>
                                    <label for="password">Password</label>
                                    <Field type="password" name="password" class="textbox" placeholder="password"/>
                                    <div class="error">{errors.password && touched.password ? ( <div>{errors.password}</div> ) : null}</div>
                                </div>
                                <div class="submit">
                                    <button type="submit">Submit</button>
                                </div>
                            </Form>
                            <div class="register">
                                <Link to={`/register`}>Register new user &#8594;</Link>
                            </div>
                        </div>
                    )}
                
                </Formik>
            </>
        );
    }
}