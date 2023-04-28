import React, { useContext, useState } from "react";
import { Formik, Form, Field } from 'formik';
import './root.css';
import { Link, useLocation, useOutletContext } from "react-router-dom";
import './login.css';
import * as Yup from 'yup';
// import 'services/authentication-service.js'
import AuthenticationService from '../services/authentication-service.js';
import ProfileService from "../services/profile-service";

const valid = Yup.object().shape({
    user: Yup.string()
        .required('Required'),
    password: Yup.string()
        .required('Required'),
});

const Login = () => {
    const [contextValue, setContextValue] = useOutletContext();

    const handleSubmit = async (data) => {
        const isLoggedIn = await AuthenticationService.loginUser(data.user, data.password);
        if (!isLoggedIn) {
            console.log("Not logged in");
            return;
        }

        const user = await ProfileService.getUser(data.user);
        console.log(user);

        const userId = user.userID;
        let address = null;
        let isProfileMissing = true;
        try {
            const profile = await ProfileService.getProfile(userId);
            address = profile.Address;
            isProfileMissing = false;
        } catch (err) {
            console.log(`Profile not retrieved + ${err}`);
        }

        setContextValue({
            isLoggedIn: true,
            isProfileMissing,
            userId,
            address
        });
    };

    return (
        <>
            <Formik initialValues={{ password: '', username: '' }} validationSchema={valid} onSubmit={handleSubmit}>

                {({ errors, touched, isValidating, isSubmitting }) => (
                    <div>
                        <h1>Account Login</h1>
                        <Form>
                            <div>
                                <label for="user">Username</label>
                                <Field type="text" name="user" class="textbox" placeholder="username" />
                                <div class="error">{errors.user && touched.user ? (<div>{errors.user}</div>) : null}</div>
                            </div>
                            <div>
                                <label for="password">Password</label>
                                <Field type="password" name="password" class="textbox" placeholder="password" />
                                <div class="error">{errors.password && touched.password ? (<div>{errors.password}</div>) : null}</div>
                            </div>
                            <div class="submit">
                                <button type="submit">Submit</button>
                            </div>
                        </Form>
                        <div class="register">
                            <Link to={`/register`}>Register new user &#8594;</Link>
                        </div>
                    </div>
                )}

            </Formik>
        </>
    );
}

export default Login;