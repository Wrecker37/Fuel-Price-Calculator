import React from "react";
import { Formik, Form, Field } from 'formik';
import './root.css';
import { Link } from "react-router-dom";
import './login.css';
import * as Yup from 'yup';
import { useState } from "react";
import {useFormikContext} from 'formik';
import DatePicker from 'react-modern-calendar-datepicker';
import Calendar from 'react-modern-calendar-datepicker'
import 'react-modern-calendar-datepicker/lib/DatePicker.css';


/*export default function Calculator() {
    return <p>Calculator</p>*/
// const Example = () => {
//     const [startDate, setStartDate] = useState(new Date());
//     return (
//         <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
//     );
// };

const valid = Yup.object().shape({
    user: Yup.string()
        .required('Required'),
    password: Yup.string()
        .required('Required'),
});


function MyCalendar() {
    const [selectedDate, setSelectedDate] = useState(null);
  
    const handleDateChange = (date) => {
      setSelectedDate(date);
    };
  
    return (
      <Calendar
        value={selectedDate}
        onChange={handleDateChange}
        calendarClassName="my-calendar"
        shouldHighlightWeekends
      />
    );
};
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

// const App = () => {
//     const [selectedDay, setSelectedDay] = useState(null);
//     return (
//         <DatePicker
//             value={selectedDay}
//             onChange={setSelectedDay}
//             inputPlaceholder="Select a day"
//             shouldHighlightWeekends
//         />
//     );
// };
const myString = "4401 Cougar Village Dr, Houston, TX 77204";
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
                                        <label for="client-in-state">Client In-State</label>                                    
                                        <Field as="select" name="client-in-state">
                                            <option value="">Select an option</option>
                                            <option value="yes">Yes</option>
                                            <option value="no">No</option>
                                        </Field>
                                        <div class="error">{errors.Client_In_State && touched.Client_In_State ? (<div>{errors.Client_In_State}</div>) : null}</div>
                                    </div>

                                    <div>
                                        <label for="client-history">Past Client</label>                                    
                                        <Field as="select" name="client-history">
                                            <option value="">Select an option</option>
                                            <option value="yes">Yes</option>
                                            <option value="no">No</option>
                                        </Field>
                                        <div class="error">{errors.client_History && touched.client_History ? (<div>{errors.client_History}</div>) : null}</div>
                                    </div>

                                    <div>
                                        <label for="myDate">Delivery Date</label>
                                        <Field name="myDate" component={MyDatePicker} />
                                        {/* <Field name="date" as={MyCalendar} /> */}
                                        
                                    </div>
                                    
                                    <div>
                                        <label for="gallons">Gallons Requested</label>
                                        <Field type="number" name="gallons" class="form-control" />
                                        <div class="error">{errors.gallons && touched.gallons ? (<div>{errors.gallons}</div>) : null}</div>
                                    </div>
                                    
                                    <div>
                                        <label for="nonEditable" title={myString}>Delivery Address: {myString}</label>
                                        {/* <label for="nonEditable">Non-Editable Address from Profile</label> */}
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