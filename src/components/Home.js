import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 

class Home extends Component {
  render() {
    return (
        <div>
          <h2 className="text-center">Home</h2>
          <div style={{float: 'right'}}><Link className="btn btn-primary" style={{marginRight:'20px'}} role="button" to="/login" > Log In </Link></div>

          
          
          <div style={{float: 'left'}}><Link className="btn btn-primary" style={{marginLeft:'20px'}} role="button" to="/register" > Sign Up </Link></div>
        </div>
    );
  }
}

export default Home;