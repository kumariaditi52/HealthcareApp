// import React from 'react';
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom
// import './Header.css';

// const Header = () => {
//     return (
//         <header className="header">
//             <div className="logo">Healthcare App</div>
//             <nav>
//                 <ul className="nav-links">
//                     <li><Link to="/">Home</Link></li> {/* Use Link instead of anchor tag */}
//                     <li><Link to="/register">Register</Link></li>
//                     <li><Link to="/login">Login</Link></li>
//                     <li><Link to="/appointment-preview">Appointment Preview</Link></li> {/* Add link to Appointment Preview */}

//                 </ul>
//             </nav>
//         </header>
//     );
// };

// export default Header;



import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear user session or token storage
        localStorage.removeItem('userToken'); 
        sessionStorage.removeItem('userSession'); 

        // Redirect to login page
        navigate('/login');
    };

    return (
        <header className="header">
            <div className="logo">Healthcare App</div>
            <nav>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/appointment-preview">Appointment Preview</Link></li>
                    <li><button className="logout-btn" onClick={handleLogout}>Log out</button></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;







