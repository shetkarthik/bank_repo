import React from "react";

import { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const Login = () => {

    const [userid, useridupdate] = useState("");
    const [dob, dobupdate] = useState("");

    const navigate = useNavigate("");

    const ProceedLogin = (e) => {
        e.preventDefault();

        fetch("http://127.0.0.1:8000/user/").then((res) => {
            return res.json();
        }).then((resp) => {
            for (let i = 0; i <= resp.length; i++) {
                if (resp[i]?.userid === userid && resp[i]?.dob === dob) {
                    toast.success("Login Success");
                    navigate("/home");

                }
                else if (userid === "admin" && dob === "121212") {
                    navigate("/manage")
                }
            }

        }).catch((err) => {
            console.log(err.message);
            toast.error("Login failed");
        })

    }


    return (
        <>
            <div className="container-fluid">
                <form onSubmit={ProceedLogin}>
                    {/* <div className="card">
                            <div className="card-header">
                                <h1 className="card-heading theme-color">Register your Account now!!</h1>
                            </div>
                            <div className="card-body"> */}
                    <div className="row">
                        <div className="col-lg-6 p-0">


                            <div className="background"></div>


                        </div>
                        <div className="col-lg-6 form-centered">
                            <h1 className="text-center register_heading">Log-in</h1>
                            <div className="container form-centered">
                                <div className="form-group">
                                    <label>UserID <span className="errmsg">*</span></label>
                                    <input type="text" value={userid} onChange={e => useridupdate(e.target.value)} className="form-control" placeholder="Enter userid" />
                                </div>

                                <div className="form-group">
                                    <label>Password <span className="errmsg">*</span></label>
                                    <input type="password" value={dob} onChange={e => dobupdate(e.target.value)} className="form-control" placeholder="Enter your password" />
                                </div>
                                <button type="submit" className="btn btn-primary m-2">Login</button>

                            </div>
                            <p className="text-center">New User, Please Register</p>
                            <div className="container button-centered">
                                <Link className="btn btn-success" to={'/register/'}>Register</Link>
                                <button type="btn" className="btn"><Link className="button-back" to="/">Back</Link></button>
                            </div>

                        </div>

                    </div>

                </form>
            </div>
        </>
    )
}




















