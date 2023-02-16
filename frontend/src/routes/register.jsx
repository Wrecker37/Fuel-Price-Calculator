import React from "react";
import { Formik, Form, Field } from 'formik';
import './root.css';
import { Link } from "react-router-dom";
import './login.css';

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

                    {({isSubmitting}) => (
                        <div>
                            <h1>Registration</h1>
                            <Form>
                                <div>
                                    <label for="user">Username</label>
                                    <Field type="text" name="user" class="textbox" placeholder="username"/>
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
                                <Link to={`/login`}>Sign in &#8594;</Link>
                            </div>
                        </div>
                    )}
                
                </Formik>
            </>
        );
    }
}