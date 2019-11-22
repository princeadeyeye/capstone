import React, { Component } from 'react';
import './Homepage.css'

class Homepage extends Component {
 

    constructor(props) {
        super(props);
    }

    render() {
        return (
        		<div className="main-bg">
			        <div className="box-conatiner">
			            <div id="a">
			                <div className="circle-ripple"></div>
			            </div>

			            <div className="row">
			                <div className="col-md-6 col-sm-6">
			                    <h1 className="heading-left">TeamWork </h1>
			                </div>
			                <div className="col-sm-6 col-md-6">
			                    <div className="wrap-login100">
			                        <span className="login100-form-title">
			                            Sign In
			                        </span>
			                        <form className="login100-form validate-form p-l-55 p-r-55 p-t-20">
			                           
			                            <div className="wrap-input100 validate-input m-b-16" data-validate="Please enter username">
			                                <input className="input100" type="text" name="username" placeholder="Username" />
			                                <span className="focus-input100"></span>
			                            </div>
			                            <div className="wrap-input100 validate-input" data-validate="Please enter password">
			                                <input className="input100" type="password" name="pass" placeholder="Password" />
			                                <span className="focus-input100"></span>
			                            </div>
			                            <div className="text-right p-t-13 p-b-23">
			                                <span className="txt1">
			                                    Forgot
			                                </span>
			                                <a href="#" className="txt2">
			                                    Username / Password?
			                                </a>
			                            </div>
			                            <div className="container-login100-form-btn">
			                                <button className="login100-form-btn">
			                                    Sign in
			                                </button>
			                            </div>
			                            <div className="flex-col-c p-t-140 p-b-40">
			                                <span className="txt1 p-b-9">
			                                    Don’t have an account?
			                                </span>
			                                <a href="#" className="txt3">
			                                    Sign up now
			                                </a>
			                            </div>
			                        </form>
			                    </div>
			                </div>
			            </div>
			        </div>
			    </div>
            
        );
    }
}

export default Homepage;
