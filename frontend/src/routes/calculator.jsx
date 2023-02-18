import React from "react";
import { Formik, Form, Field } from 'formik';
import './root.css';
import { Link } from "react-router-dom";
import './login.css';
import * as Yup from 'yup';
import { useState } from "react";
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import DatePicker from 'react-modern-calendar-datepicker';

/*export default function Calculator() {
    return <p>Calculator</p>*/
const Example = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
    );
};
const valid = Yup.object().shape({
    user: Yup.string()
        .required('Required'),
    password: Yup.string()
        .required('Required'),
});
const App = () => {
    const [selectedDay, setSelectedDay] = useState(null);
    return (
        <DatePicker
            value={selectedDay}
            onChange={setSelectedDay}
            inputPlaceholder="Select a day"
            shouldHighlightWeekends
        />
    );
};
export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};
        
    }

    render() {

            return (

                //const [startDate, setStartDate] = useState(new Date());
                <>
                    <Formik initialValues={{ gallons: '', address: '', selectedDay: new Date() }} validationSchema={valid} onSubmit={(values, { setSubmitting }) => {
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
                                        <label for="gallons">Gallons Requested</label>
                                        <Field type="number" name="gallons" class="form-control" />
                                        <div class="error">{errors.gallons && touched.gallons ? (<div>{errors.gallons}</div>) : null}</div>
                                    </div>
                                    <div>
                                        <label for="address">Delivery Address</label>
                                        <label for="nonEditable">Non-Editable Address from Profile</label>
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