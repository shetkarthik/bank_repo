import React from "react";
import ReactDOM from "react-dom";
import { Navbar } from "./Navbar/navbar";
import { Link } from "react-router-dom";
import "../App.css";

export const Home = () => {


    const imagestring = "https://img.freepik.com/free-vector/illustration-online-payment_53876-20602.jpg?w=1060&t=st=1678013530~exp=1678014130~hmac=0c76dd16ca09c8633dd74a919649a7b08adbdee701467f38f9e35a7964a27c73"

    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row container-height">
                    <div className="col-lg-6 d-flex">
                        <img src={imagestring} alt="" className="image_conv" />
                    </div>
                    <div className="col-lg-6 form-centered">
                        <div class="card w-60">
                            <div class="card-body">
                                <h5 class="card-title">Services</h5>
                                <p class="card-text">New here.Open your first account with our bank</p>
                                <Link className="btn btn-primary" to={'/register/'}>Register</Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>



        </>
    );




}