import React from "react";
import { Formik, Form, Field } from 'formik';
import './root.css';
import { Link } from "react-router-dom";
import * as Yup from 'yup';
import { useState, useEffect } from "react";
import { useFormikContext } from 'formik';
import DatePicker from 'react-modern-calendar-datepicker';
import Calendar from 'react-modern-calendar-datepicker'
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import { Quote } from "../components/quote";
import QuoteService from '../services/quote-service';

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



const QuoteHistory = (props) => {
    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const newQuotes = await QuoteService.getQuoteHistory();
                setQuotes(newQuotes);
                console.log(newQuotes);
                console.log('Fetched quotes from backend!');
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, [])

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
                        {quotes.map((quote, index) =>
                            <>
                                <h2>Quote</h2>
                                <Quote key={index} {...quote} />
                            </>)}
                    </div>
                )}

            </Formik>
        </>
    );
}

export default QuoteHistory;