import { Outlet, Link } from "react-router-dom";
import './root.css';
import { useState } from "react";

export default function Root() {
    const [contextValue, setContextValue] = useState({
        isLoggedIn: false,
        isProfileMissing: true,
        userId: -1,
        address: '',
    });

    return (
        <>
            <div id="sidebar">
                <h1>Sidebar</h1>
                <p>{contextValue.isLoggedIn ? "Logged in" : "Not logged in"}</p>
                <p>{contextValue.isProfileMissing ? "Profile missing" : "Not missing"}</p>
                <nav>
                    <ul>
                        <li class="link">
                            <Link to={`login`}>Login</Link>
                        </li>
                        <li class="link">
                            <Link to={`profile`}>Profile</Link>
                        </li>
                        <li class="link">
                            <Link to={`calculator`}>Calculator</Link>
                        </li>
                        <li class="link">
                            <Link to={`quotehistory`}>Quote History</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div id="main-page">
                <Outlet context={[contextValue, setContextValue]} />
            </div>
        </>
    );
}