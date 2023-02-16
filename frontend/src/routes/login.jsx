import React from "react";
import { Formik, Form, Field } from 'formik';
import './root.css';
import { Link } from "react-router-dom";
import './login.css';

function validateUser(value) {
    let error;
    if (value==="courtney") {
        error="no thanks";
    }
    return error;
}

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    }

    render() {
        return (
            <>
                <Formik initialValues={{user:'', password: ''}} onSubmit={(values, {setSubmitting}) => {
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
                                    <Field type="text" name="user" class="textbox" placeholder="username" validate={validateUser}/>
                                    {errors.user && touched.user && <div class="error">{errors.user}</div>}
                                </div>
                                <div>
                                    <label for="password">Password</label>
                                    <Field type="password" name="password" class="textbox" placeholder="password"/>
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