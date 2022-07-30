// @ts-nocheck
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () =>
{
    const email = "monforingnasir@gmail.com";

    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <marquee direction="right"><Link className="navbar-brand text-success fs-4" to="/">GET & ENJOY</Link>
                </marquee>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                        <li className="nav-item">
                            <Link className="nav-link active text-light " aria-current="page" to="home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light " to="contact">Contact</Link>
                        </li>
                        {
                            email === "monforingnasir@gmail.com" ? ( <li className="nav-item">
                                <Link className="nav-link text-light " to="admin">Admin</Link>
                            </li> ) : ""
                        }
                        <li className="nav-item">
                            <Link className="nav-link text-light " to="profile">Profile</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle text-light " to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Service Area
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="number">Number</Link></li>
                                <li><Link className="dropdown-item" to="history">History</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="logout">Logout</Link></li>
                            </ul>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;