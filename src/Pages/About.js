import React, { useEffect, useState } from "react";
import { Services } from "../Config/Config";
import styled from "styled-components";
import { FaAngleDoubleRight } from "react-icons/fa";

function About() {
  const [age, setAge] = useState("");
  const yearOfBirth = "1989";

  const getAge = () => {
    setAge(new Date().getFullYear() - yearOfBirth);
  };
  useEffect(() => {
    getAge();
  });
  return (
    <Wrapper className="about-section">
      <div className="card-inner">
        <div className="card-wrap">
          <div className="content about">
            <div className="title" data-aos="fade-up">
              <span className="first-word">About </span>
              Me
            </div>
            <div className="row">
              <div className="col col-6 border-line-v">
                <div className="text-box" data-aos="fade-up">
                  <p>
                    <b>Hello! I'm Silambarasan,</b> a passionate and dedicated
                    web designer and front-end developer with over 5 years of
                    experience crafting visually stunning and user-friendly
                    websites. My journey in web design and development has been
                    fueled by a love for creativity and a deep understanding of
                    technology, enabling me to bring ideas to life in the
                    digital world.
                  </p>
                </div>
                <div className="title" data-aos="fade-up">
                  <span className="first-word">My </span>
                  Expertise
                </div>
                <p style={{ paddingTop: "1rem" }}>
                  Over the past five years, I've honed my skills in various
                  areas, including:
                </p>
                <ul style={{ paddingLeft: "0px" }}>
                  <li className="d-flex" style={{ paddingTop: "1rem" }}>
                    <span>
                      <FaAngleDoubleRight
                        style={{ color: "rgb(120, 204, 109" }}
                      />
                    </span>
                    <span>
                      <b style={{ paddingLeft: "0.5rem" }}>
                        Responsive Web Design:
                      </b>{" "}
                      Creating websites that look and function seamlessly across
                      all devices.
                    </span>
                  </li>
                  <li className="d-flex" style={{ paddingTop: "1rem" }}>
                    <span>
                      <FaAngleDoubleRight
                        style={{ color: "rgb(120, 204, 109" }}
                      />
                    </span>
                    <span>
                      <b style={{ paddingLeft: "0.5rem" }}>
                        HTML, CSS, and JavaScript:
                      </b>{" "}
                      Building clean, efficient, and scalable code to ensure
                      optimal performance
                    </span>
                  </li>
                  <li className="d-flex" style={{ paddingTop: "1rem" }}>
                    <span>
                      <FaAngleDoubleRight
                        style={{ color: "rgb(120, 204, 109" }}
                      />
                    </span>
                    <span>
                      <b style={{ paddingLeft: "0.5rem" }}>
                        Frameworks and Libraries:
                      </b>{" "}
                      Proficient in React to develop dynamic and interactive web
                      applications.
                    </span>
                  </li>
                  <li className="d-flex" style={{ paddingTop: "1rem" }}>
                    <span>
                      <FaAngleDoubleRight
                        style={{ color: "rgb(120, 204, 109" }}
                      />
                    </span>
                    <span>
                      <b style={{ paddingLeft: "0.5rem" }}>Version Control:</b>{" "}
                      Utilizing Git and GitHub for efficient project
                      collaboration and version management.
                    </span>
                  </li>
                  <li className="d-flex" style={{ paddingTop: "1rem" }}>
                    <span>
                      <FaAngleDoubleRight
                        style={{ color: "rgb(120, 204, 109" }}
                      />
                    </span>
                    <span>
                      <b style={{ paddingLeft: "0.5rem" }}>
                        Cross-Browser Compatibility:
                      </b>{" "}
                      Ensuring consistent functionality and appearance across
                      different web browsers.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="content services">
            <div className="title">
              <span className="first-word">My </span>Services
            </div>
            <div className="row service-items border-line-v">
              {Services.map((val, ind) => (
                <div key={ind} className="col col-6 border-line-h">
                  <div className="service-item">
                    <div className="icon">
                      <span>{val.icon}</span>
                    </div>
                    <div className="name">
                      <span>{val.name}</span>
                    </div>
                    <div className="desc">
                      <div>
                        <p>{val.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="content hobby">
            <div className="title">
              <span>Hobbies</span>
            </div>
            <div className="row">
              <div className="col col-6 border-line-v">
                <div className="hobby-list">
                  <ul>
                    <li>
                      <strong>Coding</strong>
                    </li>
                    <li>
                      <strong>Travelling</strong>
                    </li>
                    <li>
                      <strong>Reading</strong>
                    </li>
                    <li>
                      <strong>Sports</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default About;

const Wrapper = styled.section`
  .content.about .row .col.col-6 {
    width: 100%;
    &::before {
      content: initial;
    }
    .info-list {
      padding-top: 0;

      ul {
        margin: 0;
        padding: 0;
        font-size: 0;
        list-style: none;
        overflow: hidden;

        li {
          line-height: 1.6;
          position: relative;
          text-align: right;
          padding: 0 0 5px 0;
          display: inline-block;
          vertical-align: top;
          width: 50%;
          text-align: left;
          font-size: 0.8rem;
          color: rgb(${({ theme }) => theme.title.secondary});

          &:first-child {
            padding-top: 0;
          }
        }
      }
    }
  }
  .content.hobby .row .col.col-6 {
    width: 100%;
    &::before {
      content: initial;
    }
    .hobby-list {
      padding-top: 0;

      ul {
        margin: 0;
        padding: 0;
        font-size: 0;
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        li {
          line-height: 1.6;
          position: relative;
          padding: 0 5px 0px 5px;
          display: inline-block;
          vertical-align: top;
          flex-grow: 1;
          text-align: left;
          font-size: 0.89rem;
          color: rgb(${({ theme }) => theme.title.secondary});
          &:first-child {
            padding-top: 0;
          }
        }
      }
    }
  }
  .content .row {
    &::before {
      content: normal;
    }
  }
  .content.about .row .col.col-6:first-child {
    padding-bottom: 0;
  }
  .content.about .row .col.col-6:nth-child(2) {
    padding-right: 10px;
    padding-top: 15px;
  }
  @media (max-width: 1240px) {
    .content.about .row .col.col-6 .info-list ul li {
      padding-left: 0;
      padding-right: 0;
      width: 100%;
    }
  }
  .content.services .row .col.col-6 {
    .service-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .name {
        font-weight: 500;
        font-size: 1.06rem;
        color: rgb(${({ theme }) => theme.title.primary});
      }
      .icon {
        position: relative;
        width: 60px;
        height: 60px;
        display: flex;
        align-items: center;
        border-radius: 50%;
        justify-content: center;
        background-color: ${({ theme }) => theme.highlight.primary};
        font-size: 1.8rem;
        color: ${({ theme }) => theme.colors.white};
      }
      .desc {
        p {
          margin: 0;
          padding: 0;
          text-align: center;
        }
      }
    }
  }

  @media (min-width: 561px) {
    .service-items.border-line-v:after {
      margin: 0 0 0 -1px;
      content: "";
      position: absolute;
      left: 50%;
      top: 0;
      width: 1px;
      height: 100%;

      background: radial-gradient(
        ellipse at top,
        #dddddd 0%,
        rgba(255, 255, 255, 0) 70%
      );
    }
  }
`;
