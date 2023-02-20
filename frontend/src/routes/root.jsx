import { Outlet, Link } from "react-router-dom";
import './root.css';

export default function Root() {
    return (
        <>
            <div id="sidebar">
                <h1>Sidebar</h1>
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
                <Outlet />
            </div>
        </>
    );
}