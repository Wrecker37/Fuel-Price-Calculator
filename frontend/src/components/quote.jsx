import { Formik, Form, Field } from 'formik';

export const Quote = ({ isInState, isPastClient, deliveryDate, deliveryAddress, gallons, price, total, }) => {
    return (
        <Form>
            <div>
                <label for="date">Delivery Date: {deliveryDate}</label>
                <label for="gallons">Gallons Requested: {gallons}</label>
                <label for="nonEditable">Delivery Address: {deliveryAddress}</label>
                <label for="price">Price: ${price}  / gallon </label>
                <label for="price">Total: ${total} </label>
            </div>
        </Form>
    );
}