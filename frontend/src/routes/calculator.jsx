import React from "react";
import { Formik, Form, Field } from 'formik';
import './root.css';
import './login.css';
import * as Yup from 'yup';
import { useState } from "react";
import {useFormikContext} from 'formik';
import DatePicker from 'react-modern-calendar-datepicker';
import Calendar from 'react-modern-calendar-datepicker'
import 'react-modern-calendar-datepicker/lib/DatePicker.css';

const valid = Yup.object().shape({
    gallons: Yup.string()
        .required('Required'),
    client_in_state: Yup.string().oneOf(['yes', 'no'], 'Required')
        .required('Required'),
    client_history: Yup.string().oneOf(['yes', 'no'], 'Required')
        .required('Required'),

});

function MyDatePicker({ name, ...rest }) {
    const { setFieldValue } = useFormikContext();

    return (
      <DatePicker
        {...rest}
        inputPlaceholder="Select a date"
        value={rest.value}
        onChange={(date) => setFieldValue(name, date)}
        shouldHighlightWeekends
      />
    );
  }

const HardCodeAddress = "4401 Cougar Village Dr, Houston, TX 77204";
const price = 2.50;
const gallons = 100;
const total = price * gallons;



export default class Calculator extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};
        
    }

    render() {

            return (

                <>
                    <Formik initialValues={{ gallons: '', address: HardCodeAddress, selectedDay: new Date(), client_in_state: '', client_history: '', }} validationSchema={valid} onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400);
                    }}>

                        {({ errors, touched, isValidating, isSubmitting }) => (
                            <div>
                                <h1>Calculator</h1>
                                <Form>
                                    <div>
                                        <label for="client_in_state" class ="required">Client In-State</label>                                    
                                        <Field as="select" name="client_in_state">
                                            <option value="">Select an option</option>
                                            <option value="yes">Yes</option>
                                            <option value="no">No</option>
                                        </Field>
                                        <div class="error">{errors.client_in_state && touched.client_in_state ? (<div>{errors.client_in_state}</div>) : null}</div>
                                    </div>

                                    <div>
                                        <label for="client_history" class ="required">Past Client</label>                                    
                                        <Field as="select" name="client_history">
                                            <option value="">Select an option</option>
                                            <option value="yes">Yes</option>
                                            <option value="no">No</option>
                                        </Field>
                                        <div class="error">{errors.client_history && touched.client_history ? (<div>{errors.client_history}</div>) : null}</div>
                                    </div>

                                    <div>
                                        <label for="myDate" class ="required">Delivery Date</label>
                                        <Field name="myDate" component={MyDatePicker} />
                                        
                                    </div>
                                    
                                    <div>
                                        <label for="gallons" class ="required">Gallons Requested</label>
                                        <Field type="number" name="gallons" class="form-control" />
                                        <div class="error">{errors.gallons && touched.gallons ? (<div>{errors.gallons}</div>) : null}</div>
                                    </div>
                                    
                                    <div>
                                        <label for="nonEditable" title={HardCodeAddress}>Delivery Address: {HardCodeAddress}</label>
                                        <label for="price">Price: ${price}  / gallon </label> 
                                        <label for="price">Total: ${total} </label>                                    
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