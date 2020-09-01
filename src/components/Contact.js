import React, { useState } from "react";
import rocket from "./rocket.png";

export default function Contact(props) {
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    alert(e);
  };
  const [input, setInput] = useState({
    name: "",
    email: "",
    phone: "",
    msg: "",
  });
  const handleChange = (event) => {
    // setInput(event.target.value);
console.log();
  };
  return (
    <div class="contact">
      <div className="container">
        <div className="contact-title">
          <h3>CONTACT</h3>
        </div>

        <div className="container contact-form">
          <div className="contact-image">
            <img src={rocket} alt="rocket_contact" />
          </div>
          <form
            onSubmit={() => {
              handelSubmit();
            }}
            method=""
          >
            <h3>Drop Me a Message</h3>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    name="txtName"
                    className="form-control"
                    placeholder="Your Name *"
                    value={input.name}
                    onChange={() => {
                      handleChange();
                    }}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="txtEmail"
                    className="form-control"
                    placeholder="Your Email *"
                    value={input.email}
                    onChange={() => {
                      handleChange();
                    }}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="txtPhone"
                    className="form-control"
                    placeholder="Your Phone Number *"
                    value={input.phone}
                    onChange={() => {
                      handleChange();
                    }}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group txt_area">
                  <textarea
                    name="txtMsg"
                    className="form-control"
                    placeholder="Your Message *"
                    value={input.img}
                    onChange={() => {
                      handleChange();
                    }}
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="form-group s_btn">
              <input
                type="submit"
                name="btnSubmit"
                className="btnContact"
                value="Send Message"
                // onSubmit={()=>{handelSubmit()}}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
