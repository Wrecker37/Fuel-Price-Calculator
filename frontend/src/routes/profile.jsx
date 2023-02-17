import React from "react";
import { Formik, Form, Field } from 'formik';
import './root.css';
import './login.css';

import * as Yup from 'yup';

const valid = Yup.object().shape({
    name: Yup.string()
        .max(50, "Too long")
        .required('Required'),
    address1: Yup.string()
        .max(100, "Too long")
        .required('Required'),
    address2: Yup.string()
        .max(100, "Too long"),
    city: Yup.string()
        .max(100, "Too long")
        .required('Required'),
    state: Yup.string()
        .required('Please select an option'),
    zipcode: Yup.string()
        .min(5, "Too short")
        .max(9, "Too long")
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
                <Formik initialValues={{name:'', address1: '', address2: '', city: '', state: '', zipcode: ''}} validationSchema={valid} onSubmit={(values, {setSubmitting}) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}>

                    {({errors, touched, isValidating, isSubmitting}) => (
                        <div>
                            <h1>User Profile</h1>
                            <Form>
                                <div>
                                    <label for="name" class="required">Full Name</label>
                                    <Field type="text" name="name" class="textbox" placeholder="full name"/>
                                    <div class="error">{errors.name && touched.name ? ( <div>{errors.name}</div> ) : null}</div>
                                </div>
                                <div>
                                    <label for="address1" class="required">Address</label>
                                    <Field type="text" name="address1" class="textbox" placeholder="address"/>
                                    <div class="error">{errors.address1 && touched.address1 ? ( <div>{errors.address1}</div> ) : null}</div>
                                </div>
                                <div>
                                    <label for="address2">Secondary Address</label>
                                    <Field type="text" name="address2" class="textbox" placeholder="address"/>
                                    <div class="error">{errors.address2 && touched.address2 ? ( <div>{errors.address2}</div> ) : null}</div>
                                </div>
                                <div>
                                    <label for="city" class="required">City</label>
                                    <Field type="text" name="city" class="textbox" placeholder="address"/>
                                    <div class="error">{errors.city && touched.city ? ( <div>{errors.city}</div> ) : null}</div>
                                </div>
                                <div>
                                    <label for="state" class="required">State</label>
                                    <Field as="select" name="state" class="dropdown">
                                        <option value="">Please select an option</option>
                                        <option value="texas">Texas</option>
                                        <option value="other">Other</option>
                                    </Field>
                                    <div class="error">{errors.state && touched.state ? ( <div>{errors.state}</div> ) : null}</div>
                                </div>
                                <div>
                                    <label for="zipcode" class="required">Zipcode</label>
                                    <Field type="text" name="zipcode" class="textbox" placeholder="address"/>
                                    <div class="error">{errors.zipcode && touched.zipcode ? ( <div>{errors.zipcode}</div> ) : null}</div>
                                </div>
                                <div class="submit">
                                    <button type="submit">Submit</button>
                                </div>
                            </Form>
                        </div>
                    )}
                
                </Formik>
            </>
        );
    }
}