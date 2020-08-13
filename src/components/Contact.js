import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
export default function Contact(props) {
  const submit = (e) => {
    e.preventDefault();
  };
  return (
    <div className='container'> 
      <div className="contact_menu">
        <div className="logo">
          <Link to="/">
            <Button
              title="Back Home "
              bgColor="orange"
              hoverColor="green"
              textColor="white"
              //   to="/"
            />
          </Link>
        </div>
        <div className="logo2">
          <Button
            title="TESTlllllllllll "
            bgColor="orange"
            hoverColor="green"
            textColor="white"
            to="https://google.com"
          />
        </div>
      </div>
      <div>
        <h1>
          Thanks for taking the time to reach out. How can I help you today?
        </h1>
      </div>

       {/* FORM MADE USING BOOTSTRAP  */}
      <div className="container contact-form">
        <form
          onSubmit={submit}
          id="contact-form"
          //   method="POST"
        >
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea className="form-control" rows="5"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
