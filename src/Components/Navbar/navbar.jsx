import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

export const Navbar = () => {
    return (
        <>
            {/* <nav>
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/register">Blogs</Link>
                    </li>
                    <li>
                        <Link to="/login">Contact</Link>
                    </li>
                </ul>
            </nav>

            <Outlet /> */}
            <div className="container">
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand"><span className={styles.logo}><i className="fa fa-university" aria-hidden="true"></i></span></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className={styles.navitem}>

                                    <Link className={styles.navlink} to="/home">Home</Link>
                                </li>
                                <li className={styles.navitem}>
                                    <a className={styles.navlink} to="/register">Loans</a>

                                </li>
                                <li className={styles.navitem}>
                                    <a className={styles.navlink}>Cards</a>
                                </li>
                                <li className={styles.navitem}>
                                    <a className={styles.navlink}>Invest</a>
                                </li>
                                <li className={styles.navitem}>
                                    <a className={styles.navlink}>Insure</a>
                                </li>
                                <li className={styles.navitem}>
                                    <a className={styles.navlink}>Offers</a>
                                </li>
                                <li className={styles.navitem}>
                                    <Link className={styles.navlink} to="/register">Login/Register</Link>
                                </li>
                            </ul>

                        </div>
                    </div>
                </nav>
            </div>

        </>
    );
}