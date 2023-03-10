import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Navbar } from "./Navbar/navbar";
import { Link } from "react-router-dom";



import "../App.css";

export const Request = () => {
    const [data, setData] = useState([])
    // const [tempdata, setTempData] = useState([]);
    useEffect(() => {
        fetchdata()
    }, [])

    let json_length = true;

    const fetchdata = async () => {

        const response = await axios.get("http://localhost:8000/user");
        setData(response.data)
        // setTempData(response.data);

        if (response.data.length === 0) {
            json_length = false;
        }

        console.log(response.data.length);




    }


    let approved = true;


    console.log(json_length);





    const appstatus = async (id) => {

        const newresponse = await axios.get("http://localhost:8000/user/" + id);

        const updatedData = {
            fname: newresponse.data.fname,
            email: newresponse.data.email,
            dob: newresponse.data.dob,
            phone: newresponse.data.phone,
            address: newresponse.data.address,
            gender: newresponse.data.gender,
            AAdno: newresponse.data.AAdno,
            PANno: newresponse.data.PANno,
            userid: newresponse.data.userid,
            status: "Approved"
        };





        const responseedit = await axios.put("http://localhost:8000/user/" + id, updatedData)


        fetch("http://127.0.0.1:8000/approved", {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(updatedData)
        }).then((res) => {
            console.log("approved successfully");

        }).catch((err) => {
            console.log("Failed:" + err.message)
        });

        // setTempData(updatedData);

        // console.log(updatedData);

        axios.delete(`http://localhost:8000/user/${id}`)

        console.log(responseedit.data)

        // hide = false;

        fetchdata();
    }

    const resubstatus = async (id) => {

        const newresponse = await axios.get("http://localhost:8000/user/" + id);
        const updatedData = {
            fname: newresponse.data.fname,
            email: newresponse.data.email,
            dob: newresponse.data.dob,
            phone: newresponse.data.phone,
            address: newresponse.data.address,
            gender: newresponse.data.gender,
            AAdno: newresponse.data.AAdno,
            PANno: newresponse.data.PANno,
            userid: newresponse.data.userid,
            status: "Resubmit"
        };




        const responseedit = await axios.put("http://localhost:8000/user/" + id, updatedData)

        fetch("http://127.0.0.1:8000/rejected", {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(updatedData)
        }).then((res) => {
            console.log("rejected successfully");

        }).catch((err) => {
            console.log("Failed:" + err.message)
        });

        // alert("Resubmission")


        axios.delete(`http://localhost:8000/user/${id}`)

        console.log(responseedit.data)

        approved = false;

        fetchdata();



    }
    return (
        <>
            <Navbar />
            <>
                <div className="container">
                    <h1 className="card-heading">REQUESTS</h1>

                    {json_length ?
                        data.map((x) => (
                            <div className="card w-25 m-2 card-spaced" key={x.id}>
                                <div className="card-body">
                                    <h5 className="card-title theme-color">New Account Request</h5>
                                    <h6 className="card-subtitle mb-2 text-muted" >Name: {x.fname}</h6>
                                    <p className="card-text">Email: {x.email}</p>
                                    <p className="card-text">DOB: {x.dob}</p>
                                    <p className="card-text">Phone: {x.phone}</p>
                                    <p className="card-text">Address: {x.address}</p>
                                    <p className="card-text">Gender: {x.gender}</p>
                                    <p className="card-text">Aaadhar Number: {x.AAdno}</p>
                                    <p className="card-text">PAN Number: {x.PANno}</p>
                                    <p className="card-text">Status: <span className="status_color">{x.status} </span></p>
                                    <Link className='card-link' onClick={() => appstatus(x.id)}>Approve</Link>
                                    <Link className='card-link' onClick={() => resubstatus(x.id)}>Resubmit</Link>


                                </div>
                            </div>

                        ))
                        :
                        <h1>No data available</h1>
                    }

                </div>

            </>

        </>
    );
}





