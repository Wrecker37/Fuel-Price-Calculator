import React from "react";
import { Formik, Form, Field } from 'formik';
import './root.css';
import { Link } from "react-router-dom";
import * as Yup from 'yup';
import { useState } from "react";
import {useFormikContext} from 'formik';
import DatePicker from 'react-modern-calendar-datepicker';
import Calendar from 'react-modern-calendar-datepicker'
import 'react-modern-calendar-datepicker/lib/DatePicker.css';

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

const myString = "4401 Cougar Village Dr, Houston, TX 77204";
const price = 2.50;
const gallons = 100;
const total = price * gallons;



export default class QuoteHistory extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};
        
    }

    render() {

            return (

                <>
                    <Formik initialValues={{ gallons: '', address: '', selectedDay: new Date() }} validationSchema={valid} onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400);
                    }}>

                        {({ errors, touched, isValidating, isSubmitting }) => (
                            <div>
                                <h1>Quote History</h1>
                                <h2>Example 1</h2>
                                <Form>                                 
                                    <div>
                                        <label for="in-state">In-State: No</label>
                                        <label for="past-client">Past Client: Yes</label>
                                        <label for ="date">Delivery Date: 1/13/2023</label>
                                        <label for="gallons">Gallons Requested: {gallons+10}</label>
                                        <label for="nonEditable" title={myString}>Delivery Address: {"107 Oklahoma 77S, Marietta, OK 73448"}</label>
                                        {/* <label for="nonEditable">Non-Editable Address from Profile</label> */}
                                        <label for="price">Price: ${price+.25}  / gallon </label> 
                                        <label for="price">Total: ${total+25} </label>                                    
                                    </div>
                                </Form>
                                <h2>Example 2</h2>
                                <Form>                                 
                                    <div>
                                        <label for="in-state">In-State: Yes</label>
                                        <label for="past-client">Past Client: Yes</label>
                                        <label for ="date">Delivery Date: 2/20/2023</label>
                                        <label for="gallons">Gallons Requested: {gallons}</label>
                                        <label for="nonEditable" title={myString}>Delivery Address: {myString}</label>
                                        {/* <label for="nonEditable">Non-Editable Address from Profile</label> */}
                                        <label for="price">Price: ${price}  / gallon </label> 
                                        <label for="price">Total: ${total} </label>                                    
                                    </div>
                                </Form>
                               
                            </div>
                        )}

                    </Formik>
                </>
            );

    }
}