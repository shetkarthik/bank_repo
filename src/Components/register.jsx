import React from "react";
import ReactDOM from "react-dom";
import { Navbar } from "./Navbar/navbar";
import "../App.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { Link } from "react-router-dom";

export const Register = () => {

    const [fname, fnamechange] = useState("");
    const [email, emailchange] = useState("");
    const [dob, dobchange] = useState("");
    const [phone, phonechange] = useState("");
    const [gender, genderchange] = useState("male");
    const [address, addresschange] = useState("");
    const [AAdno, AAdnochange] = useState("");
    const [PANno, PANnochange] = useState("");

    const first2 = fname.slice(0, 4);
    const phone2 = phone.slice(0, 4);

    let userid = first2 + phone2;




    // console.log(first2);

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        let regobj = { fname, email, dob, phone, address, gender, AAdno, PANno, userid };
        // console.log(regobj);

        fetch("http://127.0.0.1:8000/user", {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(regobj)
        }).then((res) => {
            toast.success("registered successfully");
            navigate('/');
        }).catch((err) => {
            toast.error("Failed:" + err.message)
        });
    }
    return (
        <>

            <div className="container-fluid">
                <form onSubmit={handleSubmit}>
                    {/* <div className="card">
                            <div className="card-header">
                                <h1 className="card-heading theme-color">Register your Account now!!</h1>
                            </div>
                            <div className="card-body"> */}
                    <div className="row">
                        <div className="col-lg-6 p-0">


                            <div className="background"></div>


                        </div>
                        <div className="col-lg-6">
                            <h1 className="text-center register_heading">Register your application</h1>
                            <div className="container form-centered">
                                <div className="form-group">
                                    <label>Full Name <span className="errmsg">*</span></label>
                                    <input value={fname} onChange={e => fnamechange(e.target.value)} className="form-control" type="text" />
                                </div>

                                <div className="form-group">
                                    <label>Email <span className="errmsg">*</span></label>
                                    <input value={email} onChange={e => emailchange(e.target.value)} className="form-control" type="email" />
                                </div>


                                <div className="form-group">
                                    <label>Date of birth <span className="errmsg">*</span></label>
                                    <input value={dob} onChange={e => dobchange(e.target.value)} className="form-control" type="text" />
                                </div>


                                <div className="form-group">
                                    <label>Phone <span className="errmsg">*</span></label>
                                    <input value={phone} onChange={e => phonechange(e.target.value)} className="form-control" type="text" />
                                </div>


                                <div className="form-group">
                                    <label>Gender</label>
                                    <br></br>
                                    <input type="radio" checked={gender === "male"} onChange={e => genderchange(e.target.value)} name="gender" className="app-check"></input>
                                    <label>Male</label>
                                    <input type="radio" checked={gender === "female"} onChange={e => genderchange(e.target.value)} name="gender" className="app-check"></input>
                                    <label>Female</label>

                                </div>

                                <div className="form-group">
                                    <label>Address <span className="errmsg">*</span></label>
                                    <textarea value={address} onChange={e => addresschange(e.target.value)} className="form-control" type="text" />
                                </div>


                                <div className="form-group">
                                    <label>Aadhar Number <span className="errmsg">*</span></label>
                                    <input value={AAdno} onChange={e => AAdnochange(e.target.value)} className="form-control" type="text" />
                                </div>


                                <div className="form-group">
                                    <label>PAN Number<span className="errmsg">*</span></label>
                                    <input value={PANno} onChange={e => PANnochange(e.target.value)} className="form-control" type="text" />
                                </div>
                                <button type="submit" className="btn btn-primary m-2">Submit</button>

                            </div>
                            <p className="text-center">Already a customer, Please Login</p>
                            <div className="container button-centered">
                                <button type="btn" className="btn"> <Link className="button-log" to="/login">Login</Link></button>

                                <button type="btn" className="btn"><Link className="button-back" to="/home">Back</Link></button>
                            </div>

                        </div>

                    </div>
                    {/* </div> */}
                    {/* <div className="card-footer">
                          

                        </div> */}
                    {/* </div> */}
                </form>
            </div>

        </>
    )
}