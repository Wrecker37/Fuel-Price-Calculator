import React from "react";
import { Formik, Form, Field } from 'formik';
import './root.css';
import './login.css';
import * as Yup from 'yup';
import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { useFormikContext } from 'formik';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import PriceService from "../services/price-service";
import QuoteService from "../services/quote-service";

const valid = Yup.object().shape({
    gallons: Yup.string()
        .required('Required')
        .test(
            'Is positive?',
            'Please enter a number greater than 1!',
            (value) => value > 0
        ),
    dateRequested: Yup.date().required('Required'),
});

function MyDatePicker({ name, ...rest }) {
    const [startDate, setStartDate] = useState(new Date());
    const { setFieldValue } = useFormikContext();

    const onDateChange = (date) => {
        setStartDate(date); // show changes on frontend
        setFieldValue("dateRequested", date, true); // push info into formik
    };

    console.log(name);
    return (
        <DatePicker selected={startDate} minDate={new Date()} onChange={onDateChange} />
    )
}


const Calculator = () => {
    const [contextValue, setContextValue] = useOutletContext();

    const [price, setPrice] = useState(0);
    const [gallons, setGallons] = useState(0);
    const [total, setTotal] = useState(0);

    const [quoteToSave, setQuoteToSave] = useState({});

    useEffect(() => {
        setPrice(total / gallons);
    }, [total, gallons]);

    const handleSubmit = async (values, { setSubmitting }) => {
        const { gallons, dateRequested } = values;
        console.log(gallons, dateRequested);

        const userId = contextValue.userId;

        const computedTotal = await PriceService.getPrice(userId, gallons);
        const computedPrice = computedTotal / gallons;

        setPrice(computedPrice);
        setGallons(gallons);
        setTotal(computedTotal);

        const quote = {
            userId,
            deliveryDate: dateRequested,
            gallonsRequested: gallons,
            computedPrice,
            computedTotal
        }

        setQuoteToSave(quote);
        setSubmitting(false);
    }

    const handleQuoteSave = async () => {
        const savedQuote = await QuoteService.postQuote({
            ...quoteToSave
        });
    }

    if (!contextValue.isLoggedIn) {
        return <p>Uh oh! Please log in first.</p>;
    }

    if (contextValue.isProfileMissing) {
        return <p>Uh oh! Please complete your profile first.</p>
    }

    return (
        <>
            <Formik initialValues={{ gallons: '', address: contextValue.address, dateRequested: new Date() }} validationSchema={valid} onSubmit={handleSubmit}>
                {({ errors, touched, isValidating, isSubmitting }) => (
                    <div>
                        <h1>Calculator</h1>
                        <Form>
                            <div>
                                <label for="dateRequested" class="required">Delivery Date</label>
                                <Field name="dateRequested" component={MyDatePicker} />
                            </div>
                            <div>
                                <label for="gallons" class="required">Gallons Requested</label>
                                <Field type="number" name="gallons" class="form-control" />
                                <div class="error">{errors.gallons && touched.gallons ? (<div>{errors.gallons}</div>) : null}</div>
                            </div>
                            <div>
                                <label for="nonEditable" title={contextValue.address}>Delivery Address: {contextValue.address}</label>
                                <label for="price">Price: ${price}  / gallon </label>
                                <label for="price">Total: ${total} </label>
                            </div>
                            <div class="submit">
                                <button type="submit">Get Quote</button>
                            </div>
                        </Form>
                    </div>
                )}

            </Formik>
            {Object.keys(quoteToSave).length === 0 ? <p>Get a quote before you can save it!</p> : <button type="submit" onClick={handleQuoteSave}>Save Quote</button>}
        </>
    );
}

export default Calculator;