import { Component } from "react";

import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

class RegistratinForm extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
        <div className="bg-white p-3 w-25 rounded">
          <form>
            <div className="mb-3">
              <label htmlFor="name">
                <strong>Name</strong>
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter You name"
                className="form-control rounded-0"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email">
                <strong>Email</strong>
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter Email"
                className="form-control rounded-0"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password">
                <strong>Password</strong>
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter Password"
                className="form-control rounded-0"
              />
            </div>
            <button className="btn btn-success w-100">Sign up</button>
            <p>Aggree</p>
            <Link to="/" className="btn btn-default border">
              Login
            </Link>
          </form>
        </div>
      </div>
    );
  }
}
export default RegistratinForm;
