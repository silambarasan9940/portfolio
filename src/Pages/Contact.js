import React, { useState, useRef } from "react";
import { FaTelegramPlane } from "react-icons/fa";
import styled from "styled-components";
import emailjs from "@emailjs/browser";

function Contact() {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    message: "",
  });
  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2rdrhgf",
        "template_n0n2pfn",
        form.current,
        "VBUf5zHwT7ZlnlODs"
      )
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Thanks, your message is sent successfully.");
          setUserData({
            firstName: "",
            lastName: "",
            email: "",
            address: "",
            message: "",
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed to send the message. Please try again.");
        }
      );
  };

  return (
    <Wrapper>
      <section className="card-inner contacts" id="contacts-card">
        <div className="card-wrap">
          <div className="content contacts">
            <div className="content contacts">
              <div className="title">
                <span className="first-word">Contact </span>
                Form
              </div>
              <div className="row">
                <div className="col col-12 border-line-v">
                  <div className="contact_form">
                    <form
                      ref={form}
                      onSubmit={sendEmail}
                      id="cform"
                      method="post"
                      noValidate="novalidate"
                    >
                      <div className="row">
                        <div className="col col-6">
                          <div className="group-val">
                            <input
                              type="text"
                              name="firstName"
                              placeholder="First Name"
                              value={userData.firstName}
                              onChange={postUserData}
                              required
                            ></input>
                          </div>
                        </div>
                        <div className="col col-6 ">
                          <div className="group-val">
                            <input
                              type="text"
                              name="lastName"
                              placeholder="Last Name"
                              value={userData.lastName}
                              onChange={postUserData}
                              required
                            ></input>
                          </div>
                        </div>
                        <div className="col col-6">
                          <div className="group-val">
                            <input
                              type="email"
                              name="email"
                              placeholder="Email Address"
                              value={userData.email}
                              onChange={postUserData}
                              required
                            ></input>
                          </div>
                        </div>
                        <div className="col col-6">
                          <div className="group-val">
                            <input
                              type="text"
                              name="address"
                              placeholder="Address"
                              value={userData.address}
                              onChange={postUserData}
                              required
                            ></input>
                          </div>
                        </div>
                        <div className="col col-12">
                          <div className="group-val">
                            <textarea
                              name="message"
                              placeholder="Your Message"
                              value={userData.message}
                              onChange={postUserData}
                              required
                            ></textarea>
                          </div>
                        </div>
                      </div>
                      <div className="align-left">
                        <button type="submit" className="button">
                          <span className="text">Send Message</span>
                          <span className="icon">
                            <FaTelegramPlane />
                          </span>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}

export default Contact;

const Wrapper = styled.section`
  .content {
    position: relative;
    margin: 0 0 40px 0;

    &:last-child {
      margin-bottom: 30px;
    }
    input,
    textarea,
    button {
      transition: all 0.3s ease 0s;
      box-shadow: 5px 5px 10px
        rgba(${({ theme }) => theme.highlight.rgb.primary}, 0.2);
    }
    .title {
      color: rgb(${({ theme }) => theme.title.primary});

      &:after {
        content: "";
        position: absolute;
        height: 1px;
        left: -30px;
        right: 0;
        bottom: 0;
        width: auto;
        background: ${({ theme }) => theme.border.gradient2};
      }
    }

    .alert-success {
      display: none;
    }

    .contacts .row {
      .col {
        flex: none;

        textarea {
          padding: 15px;
          height: 94px;
        }
      }
      .icon {
        font-size: 1.2rem;
        margin: 0 6px;
      }

      button {
        box-shadow: 5px 5px 10px
          rgba(${({ theme }) => theme.highlight.rgb.primary}, 0.2);
        &:hover {
          background: ${({ theme }) => theme.highlight.primary};
          border: none;
          .icon {
            margin-left: 10px;
          }
        }
      }
    }
  }
`;
