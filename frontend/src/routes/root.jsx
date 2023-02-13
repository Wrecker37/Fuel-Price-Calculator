import { Outlet, Link } from "react-router-dom";

export default function Root() {
    return (
        <>
            <div id="sidebar">
                <h1>Sidebar</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to={`profile`}>Profile</Link>
                        </li>
                        <li>
                            <Link to={`calculator`}>Calculator</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div id="detail">
                <Outlet />
            </div>
        </>
    );
}