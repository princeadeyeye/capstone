import React, { Component } from 'react';

class Signin extends Component {
    
    render() {
        return (
            <div class="container">
			    <div class="col-lg-5 mx-auto my-5">
		                  <form action="" method="post" class="form-box">
		                    <h3 class="h4 text-black mb-4">Login</h3>
		                    <div class="form-group">
		                      <input type="text" class="form-control" placeholder="Email Addresss" />
		                    </div>
		                    <div class="form-group">
		                      <input type="password" class="form-control" placeholder="Password" />
		                    </div>
		                    <div class="form-group">
		                      <input type="submit" class=" form-control btn btn-primary btn-pill" value="Enter" />
		                    </div>
		                  </form>
		             </div>
    			</div>
        );
    }
}

export default Signin;
