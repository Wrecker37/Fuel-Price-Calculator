import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './root.css';
import { Link } from "react-router-dom";

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    }

    render() {
        return (
            <>
                <Formik initialValues={{numGallons:'', deliveryAddress: 'I-45'}} onSubmit={(values, {setSubmitting}) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}>

                    {({isSubmitting}) => (
                        <div>
                            <h1>Account Login</h1>
                            <Form>
                                <div>
                                    <label name="user">Username: </label>
                                    <Field type="text" name="user" placeholder="username"/>
                                </div>
                                <div>
                                    <label name="password">Password: </label>
                                    <Field type="password" name="password" placeholder="password"/>
                                </div>
                                <div>
                                    <button type="submit">Submit</button>
                                </div>
                            </Form>

                            <div>
                            <Link to={`/register`}>Register New User</Link>
                            </div>
                        </div>
                    )}
                
                </Formik>
            </>
        );
    }
}