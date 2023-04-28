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
    isInState: Yup.string().oneOf(['yes', 'no'], 'Required')
        .required('Required'),
    isPastClient: Yup.string().oneOf(['yes', 'no'], 'Required')
        .required('Required'),
    dateRequested: Yup.date().required('Required'),
    profitMarginPercent: Yup.string()
        .required('Required')
        .test(
            'Is positive?',
            'Please enter a number greater than 0!',
            (value) => value => 0
        ),
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

    useEffect(() => {
        setPrice(total / gallons);
    }, [total, gallons]);

    const handleSubmit = async (values, { setSubmitting }) => {
        const { gallons, isInState, isPastClient, dateRequested, profitMarginPercent } = values;
        console.log(gallons, isInState, isPastClient, dateRequested, profitMarginPercent);

        const userId = contextValue.userId;
        const deliveryAddress = contextValue.address;

        const computedTotal = await PriceService.getPrice(userId, gallons);
        const computedPrice = computedTotal / gallons;

        setPrice(computedPrice);
        setGallons(gallons);
        setTotal(computedTotal);

        const postedQuote = await QuoteService.postQuote({
            userId,
            isInState,
            isPastClient,
            deliveryDate: dateRequested,
            deliveryAddress,
            gallonsRequested: gallons,
            computedPrice,
            computedTotal,
            profitMarginPercent
        });

        setSubmitting(false);
    }

    return (
        <>
            <Formik initialValues={{ gallons: '', address: contextValue.address, dateRequested: new Date(), isInState: '', isPastClient: '', profitMarginPercent: '' }} validationSchema={valid} onSubmit={handleSubmit}>
                {({ errors, touched, isValidating, isSubmitting }) => (
                    <div>
                        <h1>Calculator</h1>
                        <Form>
                            <div>
                                <label for="isInState" class="required">Client In-State</label>
                                <Field as="select" name="isInState">
                                    <option value="">Select an option</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </Field>
                                <div class="error">{errors.isInState && touched.isInState ? (<div>{errors.isInState}</div>) : null}</div>
                            </div>
                            <div>
                                <label for="isPastClient" class="required">Past Client</label>
                                <Field as="select" name="isPastClient">
                                    <option value="">Select an option</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </Field>
                                <div class="error">{errors.isPastClient && touched.isPastClient ? (<div>{errors.isPastClient}</div>) : null}</div>
                            </div>
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
                                <label for="profitMarginPercent" class="required">Profit Margin Percent</label>
                                <Field type="number" name="profitMarginPercent" class="form-control" />
                                <div class="error">{errors.profitMarginPercent && touched.profitMarginPercent ? (<div>{errors.profitMarginPercent}</div>) : null}</div>
                            </div>
                            <div>
                                <label for="nonEditable" title={contextValue.address}>Delivery Address: {contextValue.address}</label>
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

export default Calculator;