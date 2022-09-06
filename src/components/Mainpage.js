import { Button } from 'antd';
import React from 'react';
import { Link } from "react-router-dom";
const Mainpage = () => {
  return (
    <>
    <div className="container my-4" >
    <div> <h1> Fibonacci Series Login Page</h1></div>
    <Link className="dropdown-item " to="/signup/">
    <Button type="primary" className=" btn-primary" block>
      SignUp
    </Button>
    </Link>
    <Link className="dropdown-item " to="/login/">
    <Button type="primary" className=" btn-primary" block>
      Login
    </Button>
    </Link>
    </div>
    </>
  )
}

export default Mainpage