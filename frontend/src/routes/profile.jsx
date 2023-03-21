import React from "react";
import { Formik, Form, Field } from 'formik';
import './root.css';
import './login.css';
import ProfileService from '../services/profile-service.js';

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

  const userId = 1;

  const handleSubmit = async (data) => {

    const profileSent = await ProfileService.setProfile(userId, {
        name: data.name,
        address1: data.address1,
        //address2: data.address2,
        city: data.city,
        state: data.state,
        zipcode: data.zipcode
    });

    if (profileSent){
        console.log("Profile sent")
    } else {
        console.log("Failed to send profile")
    }

  };

  //const userId = 1;
export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    }
    

    render() {
        return (
            <>
                
                <Formik initialValues={{name:'', address1: '', city: '', state: '', zipcode: '' }} validationSchema={valid} onSubmit = {handleSubmit}>
                    
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
                                    <Field type="text" name="address2" class="textbox" placeholder="optional"/>
                                    <div class="error">{errors.address2 && touched.address2 ? ( <div>{errors.address2}</div> ) : null}</div>
                                </div>
                                <div>
                                    <label for="city" class="required">City</label>
                                    <Field type="text" name="city" class="textbox" placeholder="city"/>
                                    <div class="error">{errors.city && touched.city ? ( <div>{errors.city}</div> ) : null}</div>
                                </div>
                                <div>
                                    <label for="state" class="required">State</label>
                                    <Field as="select" name="state" class="dropdown">
                                        <option value="">Please select an option</option>
                                        <option value="AK">AK</option>
                                        <option value="AL">AL</option>
                                        <option value="AR">AR</option>
                                        <option value="AZ">AZ</option>
                                        <option value="CA">CA</option>
                                        <option value="CO">CO</option>
                                        <option value="CT">CT</option>
                                        <option value="DC">DC</option>
                                        <option value="DE">DE</option>
                                        <option value="FL">FL</option>
                                        <option value="GA">GA</option>
                                        <option value="HI">HI</option>
                                        <option value="IA">IA</option>
                                        <option value="ID">ID</option>
                                        <option value="IL">IL</option>
                                        <option value="IN">IN</option>
                                        <option value="KS">KS</option>
                                        <option value="KY">KY</option>
                                        <option value="LA">LA</option>
                                        <option value="MA">MA</option>
                                        <option value="MD">MD</option>
                                        <option value="ME">ME</option>
                                        <option value="MI">MI</option>
                                        <option value="MN">MN</option>
                                        <option value="MO">MO</option>
                                        <option value="MS">MS</option>
                                        <option value="MT">MT</option>
                                        <option value="NC">NC</option>
                                        <option value="ND">ND</option>
                                        <option value="NE">NE</option>
                                        <option value="NH">NH</option>
                                        <option value="NJ">NJ</option>
                                        <option value="NM">NM</option>
                                        <option value="NV">NV</option>
                                        <option value="NY">NY</option>
                                        <option value="OH">OH</option>
                                        <option value="OK">OK</option>
                                        <option value="OR">OR</option>
                                        <option value="PA">PA</option>
                                        <option value="RI">RI</option>
                                        <option value="SC">SC</option>
                                        <option value="SD">SD</option>
                                        <option value="TN">TN</option>
                                        <option value="TX">TX</option>
                                        <option value="UT">UT</option>
                                        <option value="VA">VA</option>
                                        <option value="VT">VT</option>
                                        <option value="WA">WA</option>
                                        <option value="WI">WI</option>
                                        <option value="WV">WV</option>
                                        <option value="WY">WY</option>
                                    </Field>
                                    <div class="error">{errors.state && touched.state ? ( <div>{errors.state}</div> ) : null}</div>
                                </div>
                                <div>
                                    <label for="zipcode" class="required">Zipcode</label>
                                    <Field type="text" name="zipcode" class="textbox" placeholder="zipcode"/>
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