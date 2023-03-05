import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Navbar } from "./Navbar/navbar";

import "../App.css";

export const Manage = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetchdata()
    }, [])
    const fetchdata = async () => {

        const response = await axios.get("http://localhost:8000/user");
        setData(response.data)

        console.log(response.data);

    }

    return (
        <>
            <Navbar />
            <>
                <div className="container">
                    <h1 className="card-heading">REQUESTS</h1>
                    {data.map((x) => (
                        <div className="card w-25 m-2 card-spaced">
                            <div className="card-body">
                                <h5 className="card-title theme-color">New Account Request</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Name: {x.fname}</h6>
                                <p className="card-text">Email: {x.email}</p>
                                <p className="card-text">DOB: {x.dob}</p>
                                <p className="card-text">Phone: {x.phone}</p>
                                <p className="card-text">Address: {x.address}</p>
                                <p className="card-text">Gender: {x.gender}</p>
                                <p className="card-text">Aaadhar Number: {x.AAdno}</p>
                                <p className="card-text">PAN Number: {x.PANno}</p>
                                <a href="#" className="card-link">Approve</a>
                                <a href="#" className="card-link">Resubmit</a>
                            </div>
                        </div>

                    ))}
                </div>

            </>

        </>
    );
}





