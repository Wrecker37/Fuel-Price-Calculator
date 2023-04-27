import React from "react";
import { Formik, Form, Field } from 'formik';
import './root.css';
import * as Yup from 'yup';
import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { useFormikContext } from 'formik';
import DatePicker from 'react-modern-calendar-datepicker';
import Calendar from 'react-modern-calendar-datepicker'
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import { Quote } from '../components/quote';
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

const QuoteHistory = (props) => {
    const [contextValue, setContextValue] = useOutletContext();

    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
        const userId = contextValue.userId;

        const fetchData = async () => {
            try {
                const newQuotes = await QuoteService.getQuoteHistory(userId);
                setQuotes(newQuotes);
                console.log(newQuotes);
                console.log('Fetched quotes from backend!');
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, [contextValue.userId])

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