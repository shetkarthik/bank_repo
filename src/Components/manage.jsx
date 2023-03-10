import React from 'react'
import { Navbar } from './Navbar/navbar';
import { Link } from 'react-router-dom';

import "../App.css"

export const Manage = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className="container w-100">
                <h2 className='manager_heading'>Manager Dashboard</h2>
                <div className="carousel">
                    <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active carousel_height">
                                <img className="d-block w-100" src="https://source.unsplash.com/random/1100×400/?bank" alt="First slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="https://source.unsplash.com/random/1100×400/?money" alt="Second slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="https://source.unsplash.com/random/1100×400/?city" alt="Third slide" />
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
                <div className="sub_container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card" style={{ width: 20 + 'rem' }}>
                                <div className="card-body">
                                    <h5 className="card-title manager_card_heading">Requests</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">Applications to be approved are displayed here</h6>
                                    <p className="card-text">Check requests below</p>
                                    <Link className="card-link" to={'/manage/request'}>Requests</Link>
                                    <Link className="card-link" to={'/'}>Home</Link>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card" style={{ width: 20 + 'rem' }}>
                                <div className="card-body">
                                    <h5 className="card-title manager_card_heading" style={{ color: "green" }}>Approved</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">Applications approved are displayed here</h6>
                                    <p className="card-text">Check Approved below</p>
                                    <Link className="card-link" to={'/manage/request'}>Approved</Link>
                                    <Link className="card-link" to={'/'}>Home</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card" style={{ width: 20 + 'rem' }}>
                                <div className="card-body">
                                    <h5 className="card-title manager_card_heading" style={{ color: "red" }}>Rejected</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">Applications rejected are displayed here</h6>
                                    <p className="card-text">Check Rejected below</p>
                                    <Link className="card-link" to={'/manage/request'}>Rejected</Link>
                                    <Link className="card-link" to={'/'}>Home</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}